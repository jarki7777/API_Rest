import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: String,
    releaseDate: String,
    ageRate: String,
    genre: Array,
    director: String,
    mainCast: Array
});

const Movies = mongoose.model('Movies', MovieSchema);

export default Movies;