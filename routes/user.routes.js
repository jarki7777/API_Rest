import { Router } from 'express';
import { userController } from '../controllers/user.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';
import { checkRole } from '../middleware/checkRole.js';


const userRoutes = Router();

userRoutes.post('/signup', userController.create);

userRoutes.get('/dashboard/:id', checkJwt, userController.dashboard);

userRoutes.get('/find', checkJwt, checkRole, userController.findByEmail);

userRoutes.delete('/:id', checkJwt, checkRole, userController.delete);

export default userRoutes;