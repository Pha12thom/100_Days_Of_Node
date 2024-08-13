const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);


module.exports = User;