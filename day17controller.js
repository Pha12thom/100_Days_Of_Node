import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from './day11_to_day20/day17model.js';

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


const logout = async(req, res) => {
    try {
        res.clearCookie("sessionId");
        res.clearCookie("token");
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Error during logout:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export { login, register };
