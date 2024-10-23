import User from '../models/User.js';
import bcrypt from 'bcryptjs';
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

const login = async (req, res) => {};

export { register, login };
