import Joi from 'joi';

const createGoalSchema = Joi.object({
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  name: Joi.string().max(30).required(),
  objetive: Joi.object({
    objetiveType: Joi.string().max(20).required(),
    desiredValue: Joi.alternatives().try(Joi.number(), Joi.string()).required(),
  }).required(),
});

export { createGoalSchema };
