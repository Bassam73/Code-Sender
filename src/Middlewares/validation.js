import AppError from "../../Utils/AppError.js";

export const validation = (schema) => {
  return (req, res, next) => {
    let filter = {};

    if (req.file) {
      filter = {
        userResume: req.file,
        ...req.params,
        ...req.body,
        ...req.query,
      };
    } else {
      filter = { ...req.params, ...req.body, ...req.query };
    }
    const { error } = schema.validate(filter, { abortEarly: false });
    if (!error) {
      next();
    } else {
      let errMsg = [];
      error.details.forEach((val) => {
        errMsg.push(val.message);
      });
      next(new AppError(errMsg, 401));
    }
  };
};
