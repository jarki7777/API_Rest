import { Router } from 'express';
import { orderController } from '../controllers/order.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';
import { checkRole } from '../middleware/checkRole.js';


const orderRoutes = Router();

orderRoutes.post('/new', checkJwt, orderController.createNewOrder);

orderRoutes.get('/list', checkJwt, checkRole, orderController.listOrders);

orderRoutes.get('/user/:id', checkJwt, checkRole, orderController.listByUser);

export default orderRoutes;