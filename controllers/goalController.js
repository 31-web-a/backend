import { controller } from '../utils/errorHandler.js';
import Goal from '../models/Goal.js';

const createGoal = controller(async (req, res) => {
  const { userId } = req;

  req.body.user = userId;
  const goal = await Goal.create(req.body);

  return res.json({
    msg: 'Goal created',
    goal,
  });
});

export { createGoal };
