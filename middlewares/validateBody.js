/**
 *
 * @param {import("joi").Schema} schema
 * @returns
 */
const validateBody = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: 'Invalid body',
      details: error.details,
    });
  }

  req.body = value;

  next();
};

export default validateBody;
