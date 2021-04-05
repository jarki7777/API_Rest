import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';
import { checkRole } from '../middleware/checkRole.js';

const movieRoutes = Router();

movieRoutes.post('/new', checkRole, movieController.create);

movieRoutes.get('/collection', movieController.listAll);

movieRoutes.get('/id/:id', movieController.listById);

movieRoutes.get('/title', movieController.listByName);

movieRoutes.get('/genre', movieController.listByGenre);

movieRoutes.get('/performer', movieController.listByPerformer);

movieRoutes.get('/director', movieController.listByDirector);

movieRoutes.patch('/:id', checkRole, movieController.update);

movieRoutes.delete('/:id', checkRole, movieController.delete);

export default movieRoutes;