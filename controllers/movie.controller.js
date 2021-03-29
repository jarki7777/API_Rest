import Movies from '../models/movie.model.js';
import { checkUrl } from '../util/checkUrl.js';

export const movieController = {
    createNewMovie: async (req, res) => {
        try {
            const newMovie = req.body;
            await Movies.create(newMovie);
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    listAll: async (req, res) => {
        try {
            const skip = parseInt(req.query.skip);
            const limit = parseInt(req.query.limit);
            const movieList = await Movies.find().select().skip(skip).limit(limit);
            const count = Math.ceil(await Movies.countDocuments(movieList) / 10);
            res.status(200).send({ pages: count, movies: movieList });
        } catch (e) {
            console.log(e);
        }
    },
    listById: async (req, res) => {
        try {
            const id = req.query.id;
            const movieList = await Movies.findById({ _id: id });
            checkUrl(id, movieList, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    listByName: async (req, res) => {
        try {
            const title = req.query.title;
            const movieList = await Movies.find({ title: { $regex: new RegExp(title, "i") } });
            checkUrl(title, movieList, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    listByGenre: async (req, res) => {
        try {
            const genre = req.query.genre;
            const movieList = await Movies.find({ genre: { $regex: new RegExp(genre, "i") } });
            checkUrl(genre, movieList, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });;
        }
    },
    listByperformer: async (req, res) => {
        try {
            const performer = req.query.performer;
            const movieList = await Movies.find({ mainCast: { $regex: new RegExp(performer, "i") } });
            checkUrl(performer, movieList, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    listByDirector: async (req, res) => {
        try {
            const director = req.query.director;
            const movieList = await Movies.find({ director: { $regex: new RegExp(director, "i") } });
            checkUrl(director, movieList, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    updateMovie: async (req, res) => {
        try {
            const id = req.query.id;
            if (!id) {
                res.status(400).send({ message: 'id is required' });
            }
            const newTitle = req.body.title;
            const newDate = req.body.releaseDate;
            const newAgeRate = req.body.ageRate;
            const newGenre = req.body.genre;
            const newDirector = req.body.director;
            const newMainCast = req.body.mainCast;
            if (newTitle) await Movies.findByIdAndUpdate({ _id: id }, { $set: { title: newTitle } });
            if (newDate) await Movies.findByIdAndUpdate({ _id: id }, { $set: { releaseDate: newDate } });
            if (newAgeRate) await Movies.findByIdAndUpdate({ _id: id }, { $set: { ageRate: newAgeRate } });
            if (newGenre) await Movies.findByIdAndUpdate({ _id: id }, { $set: { genre: newGenre } });
            if (newDirector) await Movies.findByIdAndUpdate({ _id: id }, { $set: { director: newDirector } });
            if (newMainCast) await Movies.findByIdAndUpdate({ _id: id }, { $set: { mainCast: newMainCast } });
            res.sendStatus(202);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const id = req.query.id;
            const movie = await Movies.findByIdAndDelete({ _id: id });
            checkUrl(id, movie, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: e.message });
        }
    }
};