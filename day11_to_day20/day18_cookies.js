import express from 'express';
import cookieParser from 'cookie-parser';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/usermodel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const route = express.Router();
const sessions = {};

route.use(express.json());
route.use(cookieParser());

route.post('/register', async(req, res) => {
    const { username, password } = req.body;
    try {
        const userExist = await User.findOne({ username, email: req.body.email });
        if (userExist) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({...req.body, password: hashedPassword });
        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);
    } catch (error) {
        console.error('Error during registration:', error); // Log the error
        return res.status(500).json({ message: 'Internal server error' });
    }
});




route.post('/login', async(req, res) => {
    const { username, password } = req.body;
    try {
        const userExist = await User.findOne({ username });
        if (userExist) {
            const validPassword = await bcrypt.compare(password, userExist.password);
            if (validPassword) {
                const token = jwt.sign({ username }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
                const sessionId = uuidv4();
                sessions[sessionId] = { username, token };
                res.cookie('sessionId', sessionId, { httpOnly: true });
                res.cookie('token', token, { httpOnly: true });
                res.status(200).json({ message: 'Logged in' });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


export default route;