import { Request, Response } from 'express';
import * as AuthService from './auth.service';
import { z } from 'zod';

// Definimos un esquema de validación para el registro de usuarios
const registerSchema = z.object({
  username: z.string().min(3).max(20), // usuario entre 3 y 20 caracteres
  password: z.string().min(6), // contraseña de al menos 6 caracteres
  role: z.enum(['admin', 'lector']).optional().default('lector'), // enum de roles, opcional, por defecto "lector"
});

export const register = async (req: Request, res: Response) => {
  try {
    // Validamos el cuerpo de la petición con el esquema definido
    const { username, password, role } = registerSchema.parse(req.body);

    const user = await AuthService.registerUser(username, password, role || 'lector');
    res.status(201).json({ message: 'Usuario registrado', userId: user.id });

  } catch (error) {
    res.status(500).json({ message: 'Error registrando usuario', error: String(error) });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
  }
  try {
    const result = await AuthService.loginUser(username, password);
    res.json(result);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    res.status(401).json({ message: 'Credenciales inválidas', error: errorMessage });
  }
};