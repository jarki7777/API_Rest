import { Router } from 'express';
import { orderController } from '../controllers/order.controller.js';
import { checkRole } from '../middleware/checkRole.js';


const orderRoutes = Router();

orderRoutes.post('/new', orderController.create);

orderRoutes.get('/list', checkRole, orderController.list);

orderRoutes.get('/user/:id', checkRole, orderController.listByUser);

export default orderRoutes;