import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import { controller } from '../utils/errorHandler.js';

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const register = controller(async (req, res) => {
  // Buscar que no exista un usuario con ese correo
  const userFound = await User.findOne({
    email: req.body.email,
  });
  if (userFound) {
    return res.status(409).json({
      msg: 'Email already registered',
    });
  }

  const salt = await bcrypt.genSalt(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  const user = await User.create(req.body);

  user.password = undefined;

  return res.json({
    msg: 'User created',
    user,
  });
});

const login = controller(async (req, res) => {
  // buscar usuario con ese correo
  const user = await User.findOne({
    email: req.body.email,
  });

  //Si no encuentra usuario
  if (!user) {
    return res.status(404).json({ msg: 'User not found' });
  }

  //Comparar contraseña encriptada con la del req.body
  const isPasswordEquals = await bcrypt.compare(
    req.body.password,
    user.password
  );

  //si la contraseña es incorrecta
  if (!isPasswordEquals) {
    return res.status(401).json({
      msg: 'Invalid credentials',
    });
  }

  //Crear token
  const token = jwt.encode(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET
  );

  return res.json({
    token,
  });
});

export { register, login };
