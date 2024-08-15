import User from './day17model.js';
import express from 'express';

const app = express();
const router = express.Router();



const register = async(req, res) => {
    try {
        const newUser = new User(req.body);
        const { email, username } = newUser;
        const userExists = await User.findOne({ email, username });
        if (userExists) {
            return res.status(400).json({ message: "user already exists" });
        }
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
        res.status(200).json({ message: "user found", userExists });

    } catch (error) {
        res.status(500).json({ error: "internal server error" });
    }
}


export { login, register };