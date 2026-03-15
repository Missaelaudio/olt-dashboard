import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET;

if (!SECRET_KEY) {
  throw new Error('ERROR FATAL: La variable de entorno JWT_SECRET no está definida en el archivo .env');
}

// Extendemos la interfaz de Request de Express para añadir la propiedad `user` con tipos.
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
        username:string;
        role: string;
      };
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // Formato: Bearer TOKEN

  if (token == null) {
    return res.status(401).json({ message: 'Acceso denegado. No se proporcionó token.' });
  }

  jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
    if (err) {
      return res.status(403).json({ message: 'Token no válido o expirado.' });
    }
    req.user = user;
    next();
  });
};

export const checkRole = (roles: Array<string>) => (req: Request, res: Response, next: NextFunction) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Acceso denegado: Rol no autorizado.' });
  }
  next();
};