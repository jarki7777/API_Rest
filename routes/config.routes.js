import { Router } from 'express';
import { configController } from '../controllers/config.controller.js';

const configRoutes = Router();

configRoutes.get('/setAdmin', configController.setAdmin);

configRoutes.get('/populateMovies', configController.populateMovies);

export default configRoutes;