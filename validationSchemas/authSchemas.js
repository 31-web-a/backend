import Joi from 'joi';

// req.body tiene que tener la forma de ->
const registerSchema = Joi.object({
  firstName: Joi.string().min(5).max(20).required(),
  lastName: Joi.string().min(5).max(20).required(),
  gender: Joi.string().min(2).max(20).required(),
  birthday: Joi.date().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,12}$/)
    .required(),
  weight: Joi.number().positive().required(),
  height: Joi.number().positive().required(),
  goal: Joi.string().min(4).max(30).required(),
  level: Joi.string().optional(),
});

export { registerSchema };
