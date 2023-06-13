import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '14d',
  });
  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 14, // 14 days
    secure: process.env.NODE_ENV === 'production' ? true : false,
    sameSite: 'strict',
  });
};

export default generateToken;
