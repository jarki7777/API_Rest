import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';

const movieRoutes = Router();

movieRoutes.post('/new', movieController.createNewMovie);

movieRoutes.get('/collection', movieController.listAll);

movieRoutes.get('/', movieController.listById);

movieRoutes.get('/title', movieController.listByName);

movieRoutes.get('/genre', movieController.listByGenre);

movieRoutes.get('/performer', movieController.listByperformer);

movieRoutes.get('/director', movieController.listByDirector);

movieRoutes.patch('/update', movieController.updateMovie);

movieRoutes.delete('/delete', movieController.deleteMovie);

export default movieRoutes;