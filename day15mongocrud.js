const mongoose = require('mongoose');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

const Student = mongoose.model('Student', studentSchema);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {

    console.log('Connected to the database');

});

function generateAccessToken(username) {
    return jwt.sign(username, process.env.SECRET_TOKEN, {
        expiresIn: '1800s'
    });

}

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token)
        return res.status(401).json({ message: 'Token not provided' });
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token is invalid' });
        req.user = user;
        next();
    });
}


app.get('/students', authenticateToken, async(req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.post('/login', async(req, res) => {
    const { email, password } = req.body;
    const student

        = await
    Student
        .findOne({ email: email });
    if (!student) return res.status(401).json({ message: 'Invalid credentials' });
    const validPassword = await bcrypt.compare(password, student.password);
    if (!validPassword) return res.status(401).json({ message: 'Invalid credentials' });
    const accessToken = generateAccessToken({ email: student.email });
    res.json({ accessToken });
});

app.post('/register', async(req, res) => {
    const { name, age, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({ name, age, email, password: hashedPassword });
    student.save();
    res.json({ message: 'Student registered successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});