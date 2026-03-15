import express from 'express';
import multer from 'multer';
import { authenticateToken, checkRole } from '../../core/middleware/auth.middleware';
import * as controller from './mappings.controller';

const router = express.Router();

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
  fileFilter: (_req, file, cb) => {
    const allowedMimes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel'
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo inválido. Solo se permiten archivos Excel (.xlsx, .xls)'));
    }
  }
});

// Rutas públicas (GET)
router.get('/api/olts', controller.getOlts);
router.get('/api/olts/:id/ports', controller.getPortsByOlt);
router.get('/api/mappings/details', controller.getDetails);

// Rutas protegidas (POST, DELETE)
router.post('/api/mappings/sheets', authenticateToken, checkRole(['admin']), upload.single('file'), controller.getSheetNames);
router.post('/api/mappings/upload', authenticateToken, checkRole(['admin']), upload.single('file'), controller.uploadMappings);
router.post('/api/mappings/manual', authenticateToken, checkRole(['admin']), controller.createOrUpdateManual);
router.delete('/api/olts/:id', authenticateToken, checkRole(['admin']), controller.deleteOlt);

export default router;