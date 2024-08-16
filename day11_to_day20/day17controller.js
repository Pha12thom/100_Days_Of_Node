import User from './day17model.js';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.use(express.json());


const register = async(req, res) => {
    try {
        const { email, username, password } = req.body;

        const userExists = await User.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            ...req.body,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};


const login = async(req, res) => {
    try {
        const { username, password } = req.body;
        const userExists = await User.findOne({ username });
        if (!userExists) {
            return res.status(400).json({ message: "User not found" });
        }
        const validPassword = await bcrypt.compare(password, userExists.password);
        if (!validPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign({ username: userExists.username }, process.env.SECRET_TOKEN, { expiresIn: '1h' });
        res.status(200).json({ message: "User found", user: userExists, token });


    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

export { login, register };