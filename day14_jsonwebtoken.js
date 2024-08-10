const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

console.log(require('crypto').randomBytes(64).toString('hex'));


function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}