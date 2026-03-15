import { processBulkUpload } from './mappings.service';


// El worker ahora escucha mensajes del proceso padre enviado vía worker.send()
process.on('message', async (message: any) => {
  try {
    const { filePath, sheetName, replace } = message;
    
    // Ejecutamos la carga masiva
    const result = await processBulkUpload(filePath, sheetName, replace);
    
    // Devolvemos el resultado al proceso padre
    process.send?.({ status: 'success', result });
    process.exit(0);
  } catch (error) {
    console.error('Error in worker:', error);
    process.send?.({ status: 'error', error: String(error) });
    process.exit(1);
  }
});