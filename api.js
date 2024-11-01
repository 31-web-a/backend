import express from 'express';
import cors from 'cors';

import authRouter from './routes/authRoutes.js';
import goalRouter from './routes/goalRoutes.js';

import { errorHandler } from './utils/errorHandler.js';

const api = express();

api.use(cors());

api.use(express.json());

api.get('/', (_req, res) => {
  return res.json({
    msg: 'API Live v6',
  });
});

api.use('/auth', authRouter);
api.use('/goals', goalRouter);

api.use(errorHandler);

export default api;
