// Error handler
export const errorHandler = (_err, _req, res, _next) => {
  return res.status(500).json({
    msg: 'Error no conocido',
  });
};

//   trycatch wrapper
export const controller = (fn) => {
  return async (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
