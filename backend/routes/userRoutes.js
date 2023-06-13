import { Router } from 'express';
import {
  authUser,
  logOutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/auth', authUser);
router.post('/register', registerUser);
router.post('/logout', logOutUser);
router
  .route('/profile')
  .get(authenticate, getUserProfile)
  .put(authenticate, updateUserProfile);

export default router;
