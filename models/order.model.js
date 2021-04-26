import mongoose from 'mongoose';


const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    movie: {
        type: mongoose.Types.ObjectId,
        ref: 'Movies',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ['created', 'delivered', 'returned', 'overdue'],
        required: true
    }
});

const Orders = mongoose.model('Orders', OrderSchema);

export default Orders;