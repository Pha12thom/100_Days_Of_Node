import User from '../day17model.js';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.use(express.json());

const register = async(req, res) => {
    try {
        const newUser = new User(req.body);
        const { email, username } = newUser;
        const userExists = await User.findOne({ email, username });
        if (userExists) {
            return res.status(400).json({ message: "user already exists" });
        }
        const hashedPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashedPassword;
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

    } catch (error) {
        res.status(500).json({ error: "internal server error" });
    }
}



const login = async(req, res) => {
    try {
        const { username, password } = req.body;
        const userExists = await User.findOne({ username, password });
        if (!userExists) {
            return res.status(400).json({ message: "user not found" });
        }
        const token = jwt.sign({ username: userExists.username }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
        res.status(200).json({ message: "user found", userExists, token });

    } catch (error) {
        res.status(500).json({ error: "internal server error" });
    }
}


export { login, register };