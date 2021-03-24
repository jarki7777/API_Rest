import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: Number
});

const Movies = mongoose.model('Movies', MovieSchema);

export default Movies;