import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    order: mongoose.Schema.Types.ObjectId
});

const Users = mongoose.model('Users', UserSchema);

export default Users;