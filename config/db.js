import mongoose from 'mongoose';

export const connectMongoose = async () => {
    try {
        await mongoose.connect(process.env.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected');
    } catch (e) {
        console.log(e)
    };
};