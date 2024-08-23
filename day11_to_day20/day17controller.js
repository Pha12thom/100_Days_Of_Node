import User from './day17model.js';
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


SECRET_TOKEN = '6a61a222a2505e76c4f4b944499aef0047b9d027274f273007ca93c51a160993cad90d6cc278a2ddd97565fadcd674b82d22f6c4570d8ebab5fdfcd3c3d2f365';


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

        console.log("Received login request for:", username); // Debugging

        const userExists = await User.findOne({ username });
        if (!userExists) {
            console.log("User not found:", username); // Debugging
            return res.status(400).json({ message: "User not found" });
        }

        const validPassword = await bcrypt.compare(password, userExists.password);
        if (!validPassword) {
            console.log("Invalid password for user:", username); // Debugging
            return res.status(400).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ username: userExists.username }, SECRET_TOKEN, { expiresIn: '1h' });
        res.status(200).json({ message: "User found", user: userExists, token });

    } catch (error) {
        console.log("Internal server error:", error); // Debugging
        res.status(500).json({ error: "Internal server error" });
    }
};


export { login, register };