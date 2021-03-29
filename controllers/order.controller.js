import Orders from '../models/order.model.js'
import { checkUrl } from '../util/checkUrl.js'

export const orderController = {
    createNewOrder: async (req, res) => {
        try {
            const newOrder = req.body;
            newOrder.date = Date.now();
            let returnDate = new Date();
            returnDate.setDate(returnDate.getDate() + 7);
            newOrder.returnDate = returnDate;
            await Orders.create(newOrder);
            res.sendStatus(201);
        } catch (e) {
            console.log(e.message);
            res.status(400).send({ message: e.message })
        }
    },
    listOrders: async (req, res) => {
        try {
            const orderList = await Orders.find();
            res.status(200).send(orderList);
        } catch (e) {
            console.log(e);
        }
    },
    listByUser: async (req, res) => {
        try {
            const user = req.query.id            
            const orderList = await Orders.find( { user: user });
            checkUrl(user, orderList, res);
        } catch (e) {
            console.log(e);
        }
    }
}