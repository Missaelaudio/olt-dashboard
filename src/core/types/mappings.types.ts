export type ExcelRow = {
  OLT?: string;
  SLOT?: number | string;
  PON?: number | string;
  EDFA?: string;
  'PON/EDFA'?: string | number;
  'COM/EDFA'?: string | number;
  CHASIS?: string;
  'P./SPLITTER'?: number | string;
  'SALIDA SPLITTER'?: string | number;
  ENTRADA?: string;
  'O.D.F'?: number | string;
  BUFFER?: number | string;
  'HILO (S)'?: string;
  FEEDER?: string;
};