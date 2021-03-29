import mongoose from 'mongoose';


const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    movie: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    date: {
        type: Date
    },
    returnDate: {
        type: Date,
    },
    status: {
        type: String,
        enum: ['created', 'delivered', 'returned', 'overdue'],
        required: true
    }
});

const Orders = mongoose.model('Orders', OrderSchema);

export default Orders;