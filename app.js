import express from 'express';
import dotenv from 'dotenv';
import { connectMongoose } from './config/db.js';
import movieRoutes from './routes/movie.routes.js';
import userRoutes from './routes/user.routes.js';
import jwtRoutes from './routes/auth.routes.js';
import orderRoutes from './routes/order.routes.js';
import configRoutes from './routes/config.routes.js';
import { checkJwt } from './middleware/checkJwt.js';
import cors from 'cors'

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

connectMongoose();

app.use('/login', jwtRoutes);

app.use('/movie', checkJwt, movieRoutes);

app.use('/user', userRoutes);

app.use('/order', checkJwt, orderRoutes);

app.use('/config', configRoutes);

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});