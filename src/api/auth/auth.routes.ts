import express from 'express';
import * as controller from './auth.controller';

const router = express.Router();

router.post('/api/auth/register', controller.register);
router.post('/api/auth/login', controller.login);

export default router;