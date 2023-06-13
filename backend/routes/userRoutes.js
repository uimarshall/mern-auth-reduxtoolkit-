import { Router } from 'express';
import {
  authUser,
  logOutUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';

const router = Router();

router.post('/auth', authUser);
router.post('/register', registerUser);
router.post('/logout', logOutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

export default router;
