import Movies from '../models/movie.model.js';
import Users from '../models/user.model.js';
import Orders from '../models/order.model.js';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const defaultMovies = require("../config/defaultMovies.json");
import mongoose from 'mongoose';

export const configController = {
    setAdmin: async (req, res) => {
        try {
            await mongoose.connection.dropDatabase();
            const admin = {
                email: 'admin@admin.com',
                userName: 'admin',
                password: '1234',
                age: 30,
                role: 'admin'
            }
            await Users.create(admin);
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    },
    populateMovies: async (req, res) => {
        try {
            await Movies.insertMany(defaultMovies);
            res.sendStatus(201);
        } catch (e) {
            console.log(e);
            res.status(500).send(e.message);
        }
    }
}