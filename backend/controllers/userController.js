import asyncHandler from 'express-async-handler';
import User from '../models/user.js';
import generateToken from '../utils/generateToken.js';

// asyncHandler is a function that takes an express route handler and wraps it in a way that any errors that occur inside the route handler are passed to the next() function. This way, we don't have to use try/catch blocks in our route handlers, but instead, we can use a single error handling middleware at the end of the middleware chain.

// @desc Auth / Login user
// @route POST /api/v1/users/auth
// @access Public

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check if email and password is entered in by user
  if (!email || !password) {
    res.status(400);
    throw new Error('Please enter email and password');
  }

  // Find user in database
  const user = await User.findOne({ email }).select('+password');
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      message: 'User Authenticated',
      data: user,
    });
  } else {
    res.status(400);
    throw new Error('Invalid email or password');
  }
});

// @desc Register a new user
// @route POST /api/v1/users/register
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    const { _id, name, email } = user;
    generateToken(res, user._id);
    res.status(201).json({
      success: true,
      _id,
      name,
      email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Logout a user
// @route POST /api/v1/users/logout
// @access Public

const logOutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', null, {
    //make sure the token name (jwt) is the same as the one in the generateToken function
    httpOnly: true,
    expires: new Date(Date.now(0)),
  });
  res.status(200).json({ message: 'User Logged Out' });
});

// @desc Get user profile
// @route GET /api/v1/users/profile
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = req.user; // req.user is set in the authenticate middleware
  res.status(200).json({ message: 'User profile fetched', data: user });
});

// @desc Update user profile
// @route PUT /api/v1/users/profile
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User profile updated' });
});

export {
  authUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
};
