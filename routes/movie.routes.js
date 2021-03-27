import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';

const movieRoutes = Router();

movieRoutes.post('/', movieController.createNewMovie);

movieRoutes.get('/', movieController.listAll);

movieRoutes.get('/query', movieController.listByName);

movieRoutes.get('/:id', movieController.listById);

movieRoutes.patch('/', movieController.updateMovie);

movieRoutes.delete('/', movieController.deleteMovie);

export default movieRoutes;