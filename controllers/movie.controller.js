import Movies from '../models/movie.model.js';
import checkUrl from './checkUrl.js';

export const movieController = {
    createNewMovie: async (req, res) => {
        try {
            const newMovie = req.body;
            await Movies.create(newMovie);
            res.sendStatus(201);
        } catch (e) {
            console.log(e.message);
            res.status(400).send({ message: 'title is required' })
        }
    },
    listAll: async (req, res) => {
        try {
            const movieList = await Movies.find();
            res.status(200).send(movieList);
        } catch (e) {
            console.log(e);
        }
    },
    listById: async (req, res) => {
        try {
            const id = req.query.id;
            const movieList = await Movies.findById({ _id: id });
            res.status(200).send(movieList);
        } catch (e) {
            console.log(e);
            res.status(400).send({ message: 'id is required' })
        }
    },
    listByName: async (req, res) => {
        try {
            const title = req.query.title;
            const movieList = await Movies.find({ title: { $regex: new RegExp(title, "i") } });
            checkUrl(title, movieList, res);
        } catch (e) {
            console.log(e);
        }
    },
    listByGenre: async (req, res) => {
        try {
            const genre = req.query.genre;
            const movieList = await Movies.find({ genre: { $regex: new RegExp(genre, "i") } });
            checkUrl(genre, movieList, res);
        } catch (e) {
            console.log(e);
        }
    },
    listByperformer: async (req, res) => {
        try {
            const performer = req.query.performer;
            const movieList = await Movies.find({ mainCast: { $regex: new RegExp(performer, "i") } });
            checkUrl(performer, movieList, res);
        } catch (e) {
            console.log(e);
        }
    },
    listByDirector: async (req, res) => {
        try {
            const director = req.query.director;
            const movieList = await Movies.find({ director: { $regex: new RegExp(director, "i") } });
            checkUrl(director, movieList, res);
        } catch (e) {
            console.log(e);
        }
    },
    updateMovie: async (req, res) => {
        try {
            const id = req.query.id;
            if (!id) {
                res.status(400).send({ message: 'id param is required' });
            }
            const newTitle = req.body.title;
            const newDate = req.body.releaseDate;
            const newAgeRate = req.body.ageRate;
            const newGenre = req.body.genre;
            const newDirector = req.body.director;
            const newMainCast = req.body.mainCast;
            if (newTitle) await Movies.findByIdAndUpdate({ _id: id }, { $set: { title: newTitle }});
            if (newDate) await Movies.findByIdAndUpdate({ _id: id }, { $set: { releaseDate: newDate }});
            if (newAgeRate) await Movies.findByIdAndUpdate({ _id: id }, { $set: { ageRate: newAgeRate }});
            if (newGenre) await Movies.findByIdAndUpdate({ _id: id }, { $set: { genre: newGenre }});
            if (newDirector) await Movies.findByIdAndUpdate({ _id: id }, { $set: { director: newDirector }});
            if (newMainCast) await Movies.findByIdAndUpdate({ _id: id }, { $set: { mainCast: newMainCast }});
            res.sendStatus(202);
        } catch (e) {
            console.log(e);
        }
    },
    deleteMovie: async (req, res) => {
        try {
            const id = req.query.id;
            if (!id) {
                res.status(400).send({ message: 'id param is required' });
            }
            await Movies.findByIdAndDelete({ _id: id });
            res.sendStatus(200)
        } catch (e) {
            console.log(e);
        }
    },
    findFilter: async (req, res) => {
        try {
            const filter = req.query.filter;
            const select = req.query.select;          
            const movieList = await Movies.find(JSON.parse(filter), select)
            res.status(200).send(movieList);
            console.log(JSON.parse(filter))
        } catch (e) {
            console.log(e)
            if (e.reason.message) {
                res.status(400).send({ message: e.reason.message });
            } else {
                res.status(500).send({ message: e.message });
            }
        }
    }
}