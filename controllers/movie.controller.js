import Movies from '../models/movie.model.js'

export const movieController = {
    list: (req, res) => {
        res.send('Movies here');
    }
}