const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const app = express();
const models = require('../models/usermodel');
const register = require('../jwt/jwt');
const login = require('../jwt/jwt');

app.use('/', register);
app.use('/', login);

app.use(express.json());
app.use('/', models);

mongoose.connect('mongodb://localhost:27017/students').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});