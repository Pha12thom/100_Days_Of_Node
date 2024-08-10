const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

const students = [{
        id: 1,
        name: 'milugo Geofrey',

        age: 21,
        course: 'Mathematics and CCS',
    },
    {
        id: 2,
        name: 'John Doe',
        age: 24,
        course: 'CCS',

    }
];

console.log(require('crypto').randomBytes(64).toString('hex'));


function generateAccessToken(username) {
    return jwt.sign(username, process.env.SECRET_TOKEN, { expiresIn: '1800s' });
}


app.post('/api/createNewUser', (req, res) => {


    const token = generateAccessToken({ username: req.body.username });
    res.json(token);


});




const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}