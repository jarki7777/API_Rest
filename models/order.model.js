import mongoose from 'mongoose';


const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    moviesOrders: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    date: String,
    returnDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['CREATED', 'DELIVERED', 'RETURNED', 'OVERDUE']
    }
});

const Orders = mongoose.model('Movies', OrderSchema);

export default Orders;