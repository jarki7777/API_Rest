import express from 'express';
import dotenv from 'dotenv';
import { connectMongoose } from './config/db.js';
import { checkJwt } from './controllers/auth.controller.js';
import userRoutes from './routes/movie.routes.js';

dotenv.config();

const app = express();

app.use(express.json());

connectMongoose();

app.use('/movie', userRoutes);

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});