import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        Default: 'Client',
        required: true
    },
    orders: [mongoose.Schema.Types.ObjectId]
});

const Users = mongoose.model('Users', UserSchema);

export default Users;