import Joi from "joi";

export const addCodeVal = Joi.object({
  codeType: Joi.string().trim().required(),
  code: Joi.string().required(),
  description: Joi.string().trim().required(),
});

export const paramsIdVal = Joi.object({
  id: Joi.string().hex().required().length(24),
  codeType: Joi.string().trim(),
  code: Joi.string(),
  description: Joi.string().trim(),
});
