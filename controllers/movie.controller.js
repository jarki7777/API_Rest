import Movies from '../models/movie.model.js';
import { checkUrl } from '../util/checkUrl.js';

export const movieController = {
    create: async (req, res) => {
        try {
            const newMovie = req.body;
            await Movies.create(newMovie);
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
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
            res.status(400).send({ 'message': e.message });
        }
    },
    listById: async (req, res) => {
        try {
            const id = req.params.id;
            const movieList = await Movies.findById({ _id: id });
            checkUrl(id, movieList, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    },
    listByName: async (req, res) => {
        try {
            const param = req.query.title;
            const movieList = await Movies.find({ $or: [
                { title: { $regex: new RegExp(param, "i") }}, 
                { mainCast: { $regex: new RegExp(param, "i") }},
                { genre: { $regex: new RegExp(param, "i") }},
                { director: { $regex: new RegExp(param, "i") }}
            ] });
            checkUrl(param, movieList, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id;
            if (!id) {
                res.status(400).send({ 'message': 'id is required' });
            }
            const newTitle = req.body.title;
            const newDate = req.body.releaseDate;
            const newAgeRate = req.body.ageRate;
            const newGenre = req.body.genre;
            const newDirector = req.body.director;
            const newMainCast = req.body.mainCast;
            const newSynopsis = req.body.synopsis;

            if (newTitle) await Movies.findByIdAndUpdate({ _id: id }, { $set: { title: newTitle } });
            if (newDate) await Movies.findByIdAndUpdate({ _id: id }, { $set: { releaseDate: newDate } });
            if (newAgeRate) await Movies.findByIdAndUpdate({ _id: id }, { $set: { ageRate: newAgeRate } });
            if (newGenre) await Movies.findByIdAndUpdate({ _id: id }, { $set: { genre: newGenre } });
            if (newDirector) await Movies.findByIdAndUpdate({ _id: id }, { $set: { director: newDirector } });
            if (newMainCast) await Movies.findByIdAndUpdate({ _id: id }, { $set: { mainCast: newMainCast } });
            if (newSynopsis) await Movies.findByIdAndUpdate({ _id: id }, { $set: { synopsis: newSynopsis } });
            
            res.sendStatus(202);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;
            const movie = await Movies.findByIdAndDelete({ _id: id });
            checkUrl(id, movie, res);
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    },
    listByGenre: async (req, res) => {
        try {

            const genre = req.query.genre;
            const limit = parseInt(req.query.limit);

            const movieList = await Movies.find({ genre: { $regex: new RegExp(genre, "i") } }).limit(limit);
            
            res.status(201).send(movieList);

        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });;
        }
    },
    listByPerformer: async (req, res) => {
        try {
            
            const performer = req.query.performer;
            const limit = parseInt(req.query.limit);

            const movieList = await Movies.find({ mainCast: { $regex: new RegExp(performer, "i") } }).limit(limit);
            
            res.status(201).send(movieList);
            
        } catch (e) {
            console.log(e);
            res.status(400).send({ 'message': e.message });
        }
    }
};