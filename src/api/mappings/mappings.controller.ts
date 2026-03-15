import { Request, Response } from 'express';
import * as XLSX from 'xlsx';
import fs from 'fs';
import { fork } from 'child_process';
import path from 'path';
import * as MappingService from './mappings.service';
import { ZodError } from 'zod';

// Obtener todas las OLTs
export const getOlts = async (_req: Request, res: Response) => {
  try {
    const olts = await MappingService.getAllOlts();
    res.json(olts);
  } catch (err) {
    res.status(500).json({ message: 'Error obteniendo OLTs' });
  }
};

export const getPortsByOlt = async (req: Request, res: Response) => {
  const oltId = parseInt(req.params.id, 10);
  if (isNaN(oltId)) return res.status(400).json({ message: 'OLT id inválido' });
  try {
    const ports = await MappingService.getOltPorts(oltId);
    res.json(ports);
  } catch (err) {
    console.error('Error obteniendo puertos de OLT:', err);
    res.status(500).json({ message: 'Error interno obteniendo puertos' });
  }
};

export const getDetails = async (req: Request, res: Response) => {
  const { oltId, slot, port } = req.query;
  if (!oltId || !slot || !port) return res.status(400).json({ message: 'Faltan parámetros (oltId, slot, port)' });
  try {
    const details = await MappingService.getMappingDetails(Number(oltId), Number(slot), Number(port));
    if (!details) return res.status(404).json({ message: 'No se encontró información para este puerto' });
    res.json(details);
  } catch (err) {
    console.error('Error obteniendo detalles:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const getSheetNames = async (req: Request, res: Response) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: 'No se recibió archivo' });
  try {
    const workbook = XLSX.readFile(file.path);
    res.json({ sheets: workbook.SheetNames });
  } catch (err) {
    res.status(500).json({ message: 'Error leyendo el archivo Excel' });
  } finally {
    if (file?.path) fs.unlinkSync(file.path);
  }
};

/**
 * Lógica actualizada para usar Child Process (Worker)
 */
export const uploadMappings = (req: Request, res: Response) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: 'No se recibió archivo' });

  // Detectamos si estamos en ejecución TS (dev) o JS (producción)
  const isTS = __filename.endsWith('.ts');
  const workerFile = isTS ? 'mappings.worker.ts' : 'mappings.worker.js';
  const workerPath = path.resolve(__dirname, workerFile);

  const worker = fork(workerPath, [], {
    execArgv: isTS ? ['-r', 'ts-node/register'] : [],
    detached: false,
    stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
  });

  // Intentamos obtener 'replace' tanto de query como de body
  const shouldReplace = req.query.replace === 'true' || req.body.replace === true || req.body.replace === 'true';

  // Enviamos los datos necesarios al worker
  worker.send({ 
    filePath: path.resolve(file.path), // Ruta absoluta para mayor seguridad
    sheetName: req.body.sheetName, 
    replace: shouldReplace 
  });

  // Escuchamos la respuesta del worker para responder al cliente
  worker.on('message', (message: any) => {
    if (message.status === 'success') {
      res.json({ message: 'Procesamiento completado', ...message.result });
    } else {
      console.error('❌ Error detallado del Worker:', message.error);
      res.status(500).json({ 
        message: 'Error procesando Excel (Transacción revertida)', 
        error: message.error 
      });
    }

    // Limpieza: Borramos el archivo temporal y liberamos el worker
    worker.unref();
  });

  worker.on('error', (err) => {
    console.error('Error en el Worker:', err);
    if (!res.headersSent) {
      res.status(500).json({ message: 'Error crítico en el proceso de carga' });
    }
  });

  // Nota: El borrado del archivo fs.unlinkSync(file.path) 
  // debería idealmente manejarse DENTRO del worker una vez termine de leerlo,
  // pero lo mantenemos aquí si el worker hace una copia o carga en memoria inmediata.
};

export const createOrUpdateManual = async (req: Request, res: Response) => {
  try {
    await MappingService.saveManualMapping(req.body);
    res.json({ message: 'Registro guardado correctamente' });
  } catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({ 
        message: 'Error de validación', 
        errors: err.issues.map(e => ({ field: e.path.join('.'), message: e.message })) 
      });
    }
    console.error('Error en carga manual:', err);
    res.status(500).json({ message: 'Error al guardar el registro manual', error: String(err) });
  }
};

export const deleteOlt = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ message: 'ID requerido' });
  try {
    await MappingService.deleteOltAndData(Number(id));
    res.json({ message: 'OLT eliminada correctamente' });
  } catch (err) {
    console.error('Error eliminando OLT:', err);
    res.status(500).json({ message: 'Error eliminando OLT', error: String(err) });
  }
};