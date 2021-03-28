import express from 'express';
import dotenv from 'dotenv';
import { connectMongoose } from './config/db.js';
import { checkJwt } from './middleware/checkJwt.js';
import movieRoutes from './routes/movie.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use(express.json());

connectMongoose();

app.use('/movie', movieRoutes);

app.use('/user', userRoutes);

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});

//Middleware example (commented because is really annoying)
// app.use(function (req, res, next) {
//     let date = new Date()
//     let day = date.getDate()
//     let month = date.getMonth() + 1
//     let year = date.getFullYear()
//     console.log(`${day}-${month}-${year}-${req.method}${req.originalUrl}`);
//     next();
// });