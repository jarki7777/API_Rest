import { Router } from 'express';
import { orderController } from '../controllers/order.controller.js';
import { checkJwt } from '../middleware/checkJwt.js';


const orderRoutes = Router();

orderRoutes.post('/new', checkJwt, orderController.createNewOrder);

orderRoutes.get('/list', checkJwt, orderController.listOrders);

orderRoutes.get('/user', checkJwt, orderController.listByUser);

export default orderRoutes;