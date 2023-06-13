import asyncHandler from 'express-async-handler';

// asyncHandler is a function that takes an express route handler and wraps it in a way that any errors that occur inside the route handler are passed to the next() function. This way, we don't have to use try/catch blocks in our route handlers, but instead, we can use a single error handling middleware at the end of the middleware chain.

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User Authenticated' });
});

export { authUser };
