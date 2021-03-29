import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    releaseDate: Date,
    ageRate: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'NC-17'],
        required: true
    },
    genre: {
        type: [String],
        enum: ['Action', 'Adventure', 'Animation', 'Fantasy', 'Thriller', 'Romance', 'Mystery', 'Horror', 'History', 'Biography', 'Film-Noir', 'Drama', 'Comedy', 'Sci-Fi', 'Crime', 'Family', 'Short', 'Sport', 'War', 'Western', 'Documentary', 'Musical'],
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