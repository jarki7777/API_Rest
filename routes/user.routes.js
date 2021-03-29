import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';


const userRoutes = Router();

userRoutes.post('/signup', userController.createNewUser);

userRoutes.get('/dashboard', checkJwt, userController.dashboard);

userRoutes.delete('/delete', checkJwt, userController.deleteUser);;

export default userRoutes;