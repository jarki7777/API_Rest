import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    releaseDate: String,
    ageRate: String,
    genre: {
        type: Array,
        default: void 0
    },
    director: String,
    mainCast: {
        type: Array,
        default: void 0
    }
});

const Movies = mongoose.model('Movies', MovieSchema);

export default Movies;