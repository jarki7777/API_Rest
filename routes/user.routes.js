import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';
import { checkRole } from '../middleware/checkRole.js';


const userRoutes = Router();

userRoutes.post('/signup', userController.create);

userRoutes.get('/dashboard/:id', checkJwt, userController.dashboard);

userRoutes.delete('/:id', checkJwt, checkRole, userController.delete);

userRoutes.patch('/update/email', checkJwt, userController.emailUpdate);

userRoutes.patch('/update/username', checkJwt, userController.usernameUpdate);

userRoutes.patch('/update/password', checkJwt, userController.passwordUpdate);

export default userRoutes;