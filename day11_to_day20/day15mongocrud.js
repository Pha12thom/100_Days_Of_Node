const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const app = express();


const User = require('../models/usermodel');
app.use('/', User);

app.use(express.json());

console.log(crypto.randomBytes(64).toString('hex'));


function generateToken(user) {
    return jwt.sign({ data: user }, 'secret', { expiresIn: '1h' });
}


function authenticateToken(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token)
        return res.json({ message: 'Token not provided' });
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.json({ message: 'Token is invalid' });
        req.user = user;
        next();
    });
}

const login = router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    if (!username && !password) {
        return res.json({ error: 'All fields are required' });
    } else {
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ token: generateToken(user) });
        } else {
            res.json({ error: 'Invalid credentials' });
        }
    }
});


const register = router.post('/register', async(req, res) => {
    const { username, name, email, password, age } = req.body;
    if (!username && !name && !email && !password && !age) {
        return res.json({ error: 'All fields are required' });
    } else {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.send(savedUser);
    }
});





module.exports = register;
module.exports = login;