import User from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
dotenv.config();

const register = async(req, res) => {
    const { name, age, email, password } = req.body;
    try {
        const userExist = await User.findOne({ email, name });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, age, email, password: hashedPassword });
        jwt.sign({ email }, process.env.SECRET_TOKEN, { expiresIn: "1h" });
        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);

    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


const login = async(req, res) => {
    const { email, password } = req.body;
    try {
        const userExist = await User.findOne({ email, password });
        if (!userExist) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const validPassword = await bcrypt.compare(password, userExist.password);
        if (validPassword) {
            const token = jwt.sign({ email }, process.env.SECRET_TOKEN, { expiresIn: "1h" });
            const sessionId = uuidv4();
            res.cookie("sessionId", sessionId, { httpOnly: true });
            res.cookie("token", token, { httpOnly: true });
            return res.status(200).json({ message: "Logged in successfully", token });
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

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


export { register, login, logout };