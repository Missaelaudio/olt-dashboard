export interface ParsedHilo {
  hilo: string;
  buffer: number;
}

// Utility: normalize and parse integer
export const toInt = (v: unknown): number | null => {
  if (v === undefined || v === null || v === '') return null;
  const n = Number(String(v).trim());
  return Number.isFinite(n) ? n : null;
};

// Helper: Parsear listas de números (ej: "8 y 9", "1, 2, 3")
export const parseNumbers = (v: unknown): number[] => {
  if (!v) return [];
  const str = String(v).toLowerCase();
  // Reemplazar 'y', 'and', '&' por comas para unificar
  const cleanStr = str.replace(/\s+(y|and|&)\s+/g, ',');
  return cleanStr.split(',')
    .map(s => parseInt(s.trim(), 10))
    .filter(n => !isNaN(n));
};

// Helper: Parsear hilos complejos con asociación de buffer
// Ej: "10 (Buffer 8); 1, 2 y 3 (Buffer 9)"
export const parseComplexHilos = (hiloRaw: unknown, defaultBuffers: number[]): ParsedHilo[] => {
  if (!hiloRaw) return [];
  const hiloStr = String(hiloRaw);
  const results: ParsedHilo[] = [];

  if (!hiloStr.includes(';') && !hiloStr.includes('(')) {
    const buffer = defaultBuffers[0] || 0; 
    return [{ hilo: hiloStr.trim(), buffer }];
  }

  const groups = hiloStr.split(';');
  for (const group of groups) {
    const bufferMatch = group.match(/\(Buffer\s*(\d+)\)/i);
    let currentBuffer = bufferMatch ? parseInt(bufferMatch[1], 10) : defaultBuffers[0] || 0;
    const cleanGroup = group.replace(/\(Buffer\s*\d+\)/gi, '').trim();
    const hilos = cleanGroup.replace(/\s+(y|and|&)\s+/g, ',').split(',');
    for (const h of hilos) {
      const trimmed = h.trim();
      if (trimmed) results.push({ hilo: trimmed, buffer: currentBuffer });
    }
  }
  return results;
};