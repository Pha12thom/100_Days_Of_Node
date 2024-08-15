const mongoose = require('mongoose');
const express = require('express');
const app = express();
const router = express.Router();

const User = mongoose.Schema({
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


const UserModel = mongoose.model('User', User);


module.exports = UserModel;