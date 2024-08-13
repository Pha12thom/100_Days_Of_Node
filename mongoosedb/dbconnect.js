const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const app = express();
const models = require('./models/usermodel');

app.use(express.json());
app.use('/', models);

const db = mongoose.connect('mongodb://localhost:27017/users').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});