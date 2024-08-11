const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
app.use(express.json()); // To parse JSON bodies

const students = [{
        id: 1,
        name: 'milugo Geofrey',
        age: 21,
        course: 'Mathematics and CCS'
    },
    {
        id: 2,
        name: 'John Doe',
        age: 24,
        course: 'CCS'
    }
];

console.log(require('crypto').randomBytes(64).toString('hex'));

function generateAccessToken(username) {
    return jwt.sign(username, process.env.SECRET_TOKEN, { expiresIn: '1800s' });
}

app.post('/api/createNewUser', (req, res) => {
    const username = req.body.name;
    const accessToken = generateAccessToken({ username: username });
    res.json({ accessToken });
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({ message: `Hello, ${req.user.username}` });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});