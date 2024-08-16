import mongoose from "mongoose";
import route from "./day18_cookies.js";
import express from "express";

const app = express();

app.use(express.json());
app.use('/', route);

mongoose.connect('mongodb://localhost:27017/cookies')
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.log('Error:', error);
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});