const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.use(express.json());


const studentSchema = new mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String
});


const Student = mongoose.model('school', studentSchema);

mongoose.connect('mongodb://localhost:27017/students').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.post('/students', async(req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();
        res.status(201).send(savedStudent);
    } catch (error) {
        res.status(400).send(error);
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});