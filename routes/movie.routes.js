import { Router } from 'express';
import { movieController } from '../controllers/movie.controller.js';

const movieRoutes = Router();

movieRoutes.post('/', movieController.CreateNewMovie);

export default movieRoutes;