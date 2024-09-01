import jwt from 'jsonwebtoken';
import { login } from './controllers/controller.js';
import User from './models/usermodel.js';
import express from 'express';

const app = express();

app.use(express.json());

const router = express.Router();



function authenticateToken(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token)
        return res.status(401).json({ message: 'Token not provided' });
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token is invalid' });
        req.user = user;
        next();
    });
}

app.get()