import { Router } from 'express';
import { jwtController } from '../controllers/auth.controller.js';

const jwtRoutes = Router();

jwtRoutes.post('/', jwtController.authenticate);

export default jwtRoutes;