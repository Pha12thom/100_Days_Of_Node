import mongoose from 'mongoose';
import express from 'express';
import router from './day17route.js';
const app = express();


app.use('/', router);
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/day17db').then(() => {
    console.log('connected to database');
}).catch((error) => {
    console.log('error connecting to database');
});

app.listen(3000, () => {
    console.log('server is running');
});