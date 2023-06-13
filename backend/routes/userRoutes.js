import { Router } from 'express';
import { authUser } from '../controllers/userController.js';

// @desc Auth user & set token
// @route POST /api/v1/users/auth
// @access Public

const router = Router();

router.post('/auth', authUser);

export default router;
