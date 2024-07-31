import Joi from "joi";
export const signUpVal = Joi.object({
  userName: Joi.string().trim().min(2).max(100).required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"))
    .message(
      "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit."
    )
    .required(),
  email: Joi.string().email().trim().required(),
  role: Joi.string(),
  verified: Joi.boolean(),
});
export const signInVal = Joi.object({
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$"))
    .message("Password Is Not Valid It Can't be Your Passowrd")
    .required(),
  email: Joi.string().email().trim().required(),
});
