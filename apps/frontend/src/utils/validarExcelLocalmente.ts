import * as XLSX from 'xlsx';

export type ErrorFila = {
  row: number;
  olt: string;
  slot: number | null;
  field: string;
  value: string;
  expected: string;
  error: string;
};

type Row = {
  OLT?: string;
  SLOT?: string | number;
  PON?: string | number;
  'O.D.F'?: string | number;
  BUFFER?: string | number;
  'HILO (S)'?: string;
};

const toInt = (v: unknown): number | null => {
  if (v === undefined || v === null || v === '') return null;
  const n = Number(String(v).trim());
  return Number.isFinite(n) ? n : null;
};

export function validarExcelLocalmente(file: File): Promise<{ errores: ErrorFila[]; filasValidas: Row[] }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows: Row[] = XLSX.utils.sheet_to_json(sheet);

        const errores: ErrorFila[] = [];

        rows.forEach((r, i) => {
          const rowNumber = i + 2;
          const olt = (r.OLT ?? '').toString().trim();
          const slot = toInt(r.SLOT);
          const pon = toInt(r.PON);
          const odf = toInt(r['O.D.F']);
          const buffer = toInt(r.BUFFER);
          const hilo = (r['HILO (S)'] ?? '').toString().trim();

          if (!olt) {
            errores.push({
              row: rowNumber,
              olt: '',
              slot,
              field: 'OLT',
              value: r.OLT?.toString() ?? '',
              expected: 'nombre de OLT',
              error: 'OLT vacío',
            });
          }

          if (slot === null) {
            errores.push({
              row: rowNumber,
              olt,
              slot,
              field: 'SLOT',
              value: r.SLOT?.toString() ?? '',
              expected: 'número entero',
              error: `OLT ${olt}: SLOT inválido`,
            });
          }

          if (slot === 9 || slot === 10) {
            errores.push({
              row: rowNumber,
              olt,
              slot,
              field: 'SLOT',
              value: slot.toString(),
              expected: 'slot distinto de 9 o 10',
              error: `OLT ${olt}, Slot ${slot}: Controladora, no se crea Port.`,
            });
          }

          if (pon === null) {
            errores.push({
              row: rowNumber,
              olt,
              slot,
              field: 'PON',
              value: r.PON?.toString() ?? '',
              expected: 'número entero',
              error: `OLT ${olt}, Slot ${slot}: PON inválido`,
            });
          }

          if (odf === null) {
            errores.push({
              row: rowNumber,
              olt,
              slot,
              field: 'O.D.F',
              value: r['O.D.F']?.toString() ?? '',
              expected: 'odf-id',
              error: `OLT ${olt}, Slot ${slot}: O.D.F inválido`,
            });
          }

          if (buffer === null) {
            errores.push({
              row: rowNumber,
              olt,
              slot,
              field: 'BUFFER',
              value: r.BUFFER?.toString() ?? '',
              expected: 'número entero',
              error: `OLT ${olt}, Slot ${slot}: BUFFER inválido`,
            });
          }

          if (!hilo) {
            errores.push({
              row: rowNumber,
              olt,
              slot,
              field: 'HILO',
              value: r['HILO (S)']?.toString() ?? '',
              expected: 'color válido',
              error: `OLT ${olt}, Slot ${slot}: HILO vacío`,
            });
          }
        });

        const filasValidas = rows.filter((_, i) => !errores.some(e => e.row === i + 2));
        resolve({ errores, filasValidas });
      } catch (err) {
        reject(err);
      }
    };

    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(file);
  });
}