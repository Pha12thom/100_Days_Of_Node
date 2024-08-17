import express from 'express';
import multer from 'multer';
import mongoose from 'mongoose';
import User from './day19model.js';

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });


app.post('/register', upload.single('avatar'), async(req, res) => {
    try {
        const { name, username, email, password } = req.body;
        const avatar = req.file ? req.file.path : null;
        const userExists = await User.findOne({ $or: [{ username }, { email }] });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }


        const newUser = new User({
            name,
            username,
            email,
            avatar,
            password
        });


        const savedUser = await newUser.save();
        res.status(201).json(savedUser);

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

mongoose.connect('mongodb://localhost:27017/yourDatabaseName')
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => console.error('Failed to connect to MongoDB', error));