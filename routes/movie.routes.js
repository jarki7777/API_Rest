import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';

const movieRoutes = Router();

movieRoutes.get('/', movieController.list);

export default movieRoutes;