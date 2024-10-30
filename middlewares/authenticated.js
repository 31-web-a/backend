import jwt from 'jwt-simple';
import User from '../models/User.js';

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const authenticated = async (req, res, next) => {
  // Conseguimos token de header authorization
  const token = req.headers['authorization'];

  //   Si no hay token regresamos respuesta
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'Token missing in Authorization header' });
  }

  //   Validar que sea un token firmado por nosotros

  try {
    const { userId } = jwt.decode(token, process.env.JWT_SECRET);

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        msg: 'User token not found',
      });
    }

    req.userId = user.id;

    next();
  } catch (error) {
    return res.status(401).json({ msg: 'Invalid token', error });
  }
};

export default authenticated;
