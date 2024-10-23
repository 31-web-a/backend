import { Router } from 'express';
import { login, register } from '../controllers/authController.js';
import validateBody from '../middlewares/validateBody.js';
import {
  registerSchema,
  loginSchema,
} from '../validationSchemas/authSchemas.js';

const authRouter = Router();

authRouter.post('/register', validateBody(registerSchema), register);
authRouter.post('/login', validateBody(loginSchema), login);

export default authRouter;
