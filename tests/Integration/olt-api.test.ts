import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import app from '../../src/server';
import * as XLSX from 'xlsx';
import fs from 'fs';
import os from 'os';
import path from 'path';

// Helper: crear archivo Excel temporal con filas dadas
function createTempExcel(rows: any[], filename = 'ports.xlsx') {
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Puertos');
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'olt-'));
  const filePath = path.join(tmpDir, filename);
  XLSX.writeFile(wb, filePath);
  return filePath;
}

let oltId: number;

describe('OLT API integration', () => {
  beforeAll(async () => {
    const res = await request(app).post('/api/olts').send({ name: 'GRN-OLT-Test' });
    expect(res.status).toBe(200);
    oltId = res.body.id;
    expect(oltId).toBeTruthy();
  });

  it('rechaza Excel con slot prohibido 9', async () => {
    const filePath = createTempExcel([{ slot: 9, portNumber: 1, label: '1' }]);

    const res = await request(app)
      .post(`/api/olts/${oltId}/ports`)
      .attach('file', filePath);

    expect(res.status).toBe(200);
    expect(res.body.inserted).toBe(0);
    expect(res.body.errors.length).toBeGreaterThan(0);
    expect(res.body.errors[0].error).toContain('Slot prohibido');
  });

  it('rechaza Excel con puerto fuera de rango', async () => {
    const filePath = createTempExcel([{ slot: 1, portNumber: 99, label: '99' }]);

    const res = await request(app)
      .post(`/api/olts/${oltId}/ports`)
      .attach('file', filePath);

    expect(res.status).toBe(200);
    expect(res.body.inserted).toBe(0);
    expect(res.body.errors.some((e: any) => e.error.includes('fuera de rango'))).toBe(true);
  });

  it('sube Excel válido e inserta puertos', async () => {
    const rows = [
      { slot: 1, portNumber: 1, label: '1' },
      { slot: 1, portNumber: 2, label: '2' },
      { slot: 2, portNumber: 1, label: '1' },
      { slot: 2, portNumber: 2, label: '2' },
    ];
    const filePath = createTempExcel(rows);

    const res = await request(app)
      .post(`/api/olts/${oltId}/ports`)
      .attach('file', filePath);

    expect(res.status).toBe(200);
    expect(res.body.inserted).toBe(rows.length);
    expect(res.body.errors.length).toBe(0);
  });

  it('reemplaza puertos previos al subir nuevo Excel', async () => {
    // Primer Excel con 2 puertos
    const filePath1 = createTempExcel([
      { slot: 1, portNumber: 1, label: 'A' },
      { slot: 1, portNumber: 2, label: 'B' },
    ]);
    await request(app).post(`/api/olts/${oltId}/ports`).attach('file', filePath1);

    // Segundo Excel con 1 puerto (debe reemplazar los anteriores)
    const filePath2 = createTempExcel([{ slot: 2, portNumber: 1, label: 'C' }]);
    const res = await request(app).post(`/api/olts/${oltId}/ports`).attach('file', filePath2);

    expect(res.status).toBe(200);
    expect(res.body.inserted).toBe(1);

    // Verificar que solo existe el puerto nuevo
    const portsRes = await request(app).get(`/api/olts/${oltId}/ports`);
    expect(portsRes.body.length).toBe(1);
    expect(portsRes.body[0].label).toBe('C');
  });

  it('devuelve puertos del OLT sin incluir slots prohibidos', async () => {
    const res = await request(app).get(`/api/olts/${oltId}/ports`);
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    const hasProhibited = res.body.some((p: any) => p.slot === 9 || p.slot === 10);
    expect(hasProhibited).toBe(false);
  });
});