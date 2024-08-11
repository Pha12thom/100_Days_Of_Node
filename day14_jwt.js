const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());


const users = [
    { id: 1, username: 'milugo', password: 'password' },
    { id: 2, username: 'john', password: 'password' }
];


function generateAccessToken(username) {
    return jwt.sign(username, process.env.SECRET_TOKEN, {
        expiresIn: '1800s'
    });

}

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1];
    if (!token)
        return res.status(401).json({ message: 'Token not provided' });
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token is invalid' });
        req.user = user;
        next();
    });
}


app.get('/posts', (req, res) => {
    res.json(users);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});