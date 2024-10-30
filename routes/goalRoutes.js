import { Router } from 'express';
import { createGoal } from '../controllers/goalController.js';
import authenticated from '../middlewares/authenticated.js';
import validateBody from '../middlewares/validateBody.js';
import { createGoalSchema } from '../validationSchemas/goalSchema.js';

const goalRouter = Router();

goalRouter
  .route('/')
  .post(authenticated, validateBody(createGoalSchema), createGoal);
// .get()
// .put()

export default goalRouter;
