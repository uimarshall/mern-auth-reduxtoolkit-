import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/user.js';

const authenticate = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      // The token is sent in the request header as a Bearer token. We will extract the token from the request header and verify it using jwt.verify(). If the token is valid, we will get the user id from the token and find the user in the database. We will then attach the user to the request object and call next() to call the next middleware.

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password'); //userId is the payload in generateToken.js
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, invalid token');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export { authenticate };
