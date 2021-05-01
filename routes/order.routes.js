import { Router } from 'express';
import { orderController } from '../controllers/order.controller.js';
import { checkRole } from '../middleware/checkRole.js';
import { checkJwt } from '../middleware/checkJwt.js';


const orderRoutes = Router();

orderRoutes.post('/new', orderController.create);

orderRoutes.get('/list', checkRole, orderController.list);

orderRoutes.get('/user/:id', checkJwt, orderController.listByUser);

orderRoutes.get('/:user', checkJwt, orderController.allMoviesByUser);

export default orderRoutes;