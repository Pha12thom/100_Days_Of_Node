const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('./models/usermodel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json());

const register = app.post('/register', async(req, res) => {
    const { username, fname, lname, email, password } = req.body;
    if (!username && !fname && !lname && !email && !password) {
        return res.status(400).json({ error: 'All fields are required' });
    } else {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).send(savedUser);
    }
});


module.exports = register;