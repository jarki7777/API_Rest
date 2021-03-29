import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';

const movieRoutes = Router();

movieRoutes.post('/new', checkJwt, movieController.createNewMovie);

movieRoutes.get('/collection', checkJwt, movieController.listAll);

movieRoutes.get('/', checkJwt, movieController.listById);

movieRoutes.get('/title', checkJwt, movieController.listByName);

movieRoutes.get('/genre', checkJwt, movieController.listByGenre);

movieRoutes.get('/performer', checkJwt, movieController.listByperformer);

movieRoutes.get('/director', checkJwt, movieController.listByDirector);

movieRoutes.patch('/update', checkJwt, movieController.updateMovie);

movieRoutes.delete('/delete', checkJwt, movieController.deleteMovie);

export default movieRoutes;