import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';
import { checkRole } from '../middleware/checkRole.js';


const userRoutes = Router();

userRoutes.post('/signup', userController.createNewUser);

userRoutes.get('/dashboard/:id', checkJwt, checkRole, userController.dashboard);

userRoutes.delete('/delete/:id', checkJwt, checkRole, userController.deleteUser);

export default userRoutes;