import prisma from '../../core/utils/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerUser = async (username: string, password: string, role: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      role,
    },
  });
  return user;
};

export const loginUser = async (username: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    throw new Error('Usuario no encontrado');
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error('Contraseña incorrecta');
  }

  const token = jwt.sign(
    { userId: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET as string,
    { expiresIn: '24h' }
  );
  
  return { token, user: { id: user.id, username: user.username, role: user.role } };
};