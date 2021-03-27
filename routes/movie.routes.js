import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';

const movieRoutes = Router();

movieRoutes.post('/', movieController.createNewMovie);

movieRoutes.get('/collection', movieController.listAll);

movieRoutes.get('/title', movieController.listByName);

movieRoutes.get('/genre', movieController.listByGenre);

movieRoutes.get('/actor', movieController.listByActor);

movieRoutes.get('/director', movieController.listByDirector);

movieRoutes.get('/:id', movieController.listById);

movieRoutes.patch('/', movieController.updateMovie);

movieRoutes.delete('/', movieController.deleteMovie);

export default movieRoutes;