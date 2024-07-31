let proccess = "prod";

export const globalErrorHandler = (err, req, res, next) => {
  if ((proccess = "prod")) {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({ err: err.message, stack: err.stack });
  } else {
    err.statusCode = err.statusCode || 500;
    res.status(err.statusCode).json({ err: err.message });
  }
};
