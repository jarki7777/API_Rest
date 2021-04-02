import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';
import { checkRole } from '../middleware/checkRole.js';


const userRoutes = Router();

userRoutes.post('/signup', userController.createNewUser);

userRoutes.get('/dashboard', checkJwt, checkRole, userController.dashboard);

userRoutes.delete('/delete', checkJwt, checkRole, userController.deleteUser);

export default userRoutes;