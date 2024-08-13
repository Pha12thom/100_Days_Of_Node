const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


const userSchema = new mongoose.Schema({
    username: String,
    fname: String,
    lname: String,
    email: String,
    password: String

});

const User = mongoose.model('User', userSchema);


module.exports = User;