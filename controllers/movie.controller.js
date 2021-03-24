import Movies from '../models/movie.model.js'

export const movieController = {
    CreateNewMovie: async (req, res) => {
        try {
            const newMovie = req.body;
            const makeMovie = await Movies.create(newMovie);
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
        }
    }
}