import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';

const movieRoutes = Router();

movieRoutes.post('/', movieController.createNewMovie);

movieRoutes.get('/', movieController.listAll);

movieRoutes.patch('/', movieController.updateMovie);

export default movieRoutes;