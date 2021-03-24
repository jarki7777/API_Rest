import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';

const movieRoutes = Router();

movieRoutes.post('/', movieController.createNewMovie);

movieRoutes.get('/', movieController.listAll);

movieRoutes.get('/movie', movieController.listByTitle);

movieRoutes.patch('/', movieController.updateMovie);

movieRoutes.delete('/', movieController.deleteMovie);

export default movieRoutes;