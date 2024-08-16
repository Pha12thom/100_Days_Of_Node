import mongoose from 'mongoose';
import express from 'express';

const app = express();
const router = express.Router();

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },

    username: {
        required: true,
        unique: true,
        type: String
    },

    email: {
        required: true,
        unique: true,
        type: String
    },

    password: {
        required: true,
        type: String
    },
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;