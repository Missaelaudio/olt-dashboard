import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// En producción, asegúrate de tener JWT_SECRET en tu archivo .env
const SECRET_KEY = process.env.JWT_SECRET || 'secreto_super_seguro_cambialo';

// Registro de usuario (útil para crear el primer usuario o para administradores)
router.post('/api/auth/register', async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
  }

  try {
    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({ where: { username } });
    if (existingUser) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role: role || 'admin', // Por defecto 'admin' si no se especifica
      },
    });

    res.status(201).json({ message: 'Usuario creado exitosamente', userId: user.id });
  } catch (err) {
    console.error('Error en registro:', err);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

// Login
router.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña son requeridos' });
  }

  try {
    // Buscar el usuario
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Verificar la contraseña
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      SECRET_KEY,
      { expiresIn: '8h' } // El token expira en 8 horas
    );

    res.json({
      message: 'Login exitoso',
      token,
      user: { id: user.id, username: user.username, role: user.role }
    });
  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});

export default router;
