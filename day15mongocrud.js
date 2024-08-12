const mongoose = require('mongoose');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');


app.use(express.json());

const studentSchema = new mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String
});

const Student = mongoose.model('Student', studentSchema);

mongoose.connect('mongodb://localhost:27017/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});





app.listen(3000, () => {
    console.log('Server is running on port 3000');
});