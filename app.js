import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/movie.routes.js'

const app = express();

app.use(express.json());

try {
    await mongoose.connect('mongodb://localhost:27017/API_Rest', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    console.log('MongoDB connected');
} catch (e) {
    console.log(`Something went wrong with Mongo ${e}`)
};

app.use('/movie', userRoutes);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});