import express from 'express';

const api = express();

api.use(express.json());

api.get('/', (_req, res) => {
  return res.json({
    msg: 'API Live',
  });
});

api.use((_err, _req, res, _next) => {
  return res.status(500).json({
    msg: 'Error no conocido',
  });
});

export default api;
