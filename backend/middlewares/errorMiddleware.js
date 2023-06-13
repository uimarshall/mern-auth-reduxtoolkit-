// To catch all non-existing routes, we will create a middleware that will handle all the non-existing routes. We will create a file called errorMiddleware.js in the middlewares folder and add the following code to it.

// Path: backend\middlewares\errorMiddleware.js

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`); // req.originalUrl is the url that was requested
  res.status(404);
  next(error); // next() will pass the error to the next middleware
};

// We will also create another middleware that will handle all the errors. We will create a file called errorMiddleware.js in the middlewares folder and add the following code to it.

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode; // if res.statusCode is 200, set statusCode to 500, else set it to res.statusCode
  let message = err.message;

  // Error in the mongodb database
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = 'Invalid request/Resource not found';
  }

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // if the environment is production, don't send the stack trace
  }); // send the status code and the message as a json object
};

export { notFound, errorHandler };
