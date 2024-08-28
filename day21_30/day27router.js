import mongoose from 'mongoose';
import router from './day27_expressRouter.js';
import express from 'express';

const app = express();
app.use('/api', router);


mongo.connect('mongodb://localhost:27017/day27').then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.log(err);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});