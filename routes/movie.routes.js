import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';
import { checkRole } from '../middleware/checkRole.js';

const movieRoutes = Router();

movieRoutes.post('/new', checkJwt, checkRole, movieController.createNewMovie);

movieRoutes.get('/collection', checkJwt, movieController.listAll);

movieRoutes.get('/id/:id', checkJwt, movieController.listById);

movieRoutes.get('/title', checkJwt, movieController.listByName);

movieRoutes.get('/genre', checkJwt, movieController.listByGenre);

movieRoutes.get('/performer', checkJwt, movieController.listByperformer);

movieRoutes.get('/director', checkJwt, movieController.listByDirector);

movieRoutes.patch('/update/:id', checkJwt, checkRole, movieController.updateMovie);

movieRoutes.delete('/delete/:id', checkJwt, checkRole, movieController.deleteMovie);

export default movieRoutes;