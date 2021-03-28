import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';

const userRoutes = Router();

userRoutes.post('/new', userController.createNewUser);

userRoutes.get('/dashboard', userController.dashboard);

userRoutes.delete('/delete', userController.deleteUser);

export default userRoutes;