import Movies from '../models/movie.model.js'

export const movieController = {
    createNewMovie: async (req, res) => {
        try {
            const newMovie = req.body;
            const makeMovie = await Movies.create(newMovie);
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    },
    listAll: async (req, res) => {
        try {
            const movieList = await Movies.find();
            res.status(200).send(movieList);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    },
    listByTitle: async (req, res) => {
        try {
            const movieList = await Movies.find();
            res.status(200).send(movieList);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    },
    updateMovie: async (req, res) => {
        try {
            const id = req.body._id;
            const newTitle = req.body.title;
            const newDate = req.body.releaseDate;
            const newAgeRate = req.body.ageRate;
            const newGenre = req.body.genre;
            const newDirector = req.body.director;
            const newMainCast = req.body.mainCast;
            const modifyMovie = await Movies.findByIdAndUpdate(
                { _id: id },
                {
                    $set: {
                        title: newTitle,
                        releaseDate: newDate,
                        ageRate: newAgeRate,
                        genre: newGenre,
                        director: newDirector,
                        mainCast: newMainCast
                    }
                }
            );
            res.sendStatus(202);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const id = req.body._id;
            const movieList = await Movies.findByIdAndDelete({ _id: id });
            res.sendStatus(200)
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
}