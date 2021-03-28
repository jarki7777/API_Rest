import Orders from '../models/order.model.js'

export const orderController = {
    createNewOrder: async (req, res) => {
        try {
            const newOrder = req.body;
            const makeOrder = await Orders.create(newOrder);
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
        }
    },
    listOrders: async (req, res) => {
        try {
            const response = await Movies.find();
            res.status(200).send(response);
        } catch (e) {
            console.log(e);
        }
    },
    // listByID: async (req, res) => {
    //     try {
    //         const response = await Movies.find();
    //         res.status(200).send(response);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // },
    updateOrder: async (req, res) => {
        try {
            const id = req.body._id;
            const newTitle = req.body.title;
            const newDate = req.body.releaseDate;
            const newAgeRate = req.body.ageRate;
            const newGenre = req.body.genre;
            const newDirector = req.body.director;
            const newMainCast = req.body.mainCast;
            const modifyMovie = await Movies.findByIdAndUpdate(
                { _id: id },
                {
                    $set: {
                        title: newTitle,
                        releaseDate: newDate,
                        ageRate: newAgeRate,
                        genre: newGenre,
                        director: newDirector,
                        mainCast: newMainCast
                    }
                }
            );
            res.sendStatus(202);
        } catch (e) {
            console.log(e);
        }
    }
}