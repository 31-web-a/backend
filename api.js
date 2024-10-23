import express from 'express';
import authRouter from './routes/authRoutes.js';
import { errorHandler } from './utils/errorHandler.js';

const api = express();

api.use(express.json());

api.get('/', (_req, res) => {
  return res.json({
    msg: 'API Live',
  });
});

api.use('/auth', authRouter);

api.use(errorHandler);

export default api;
