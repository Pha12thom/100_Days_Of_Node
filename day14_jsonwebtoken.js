const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
app.use(express.json());

const users = [
    { id: 1, username: 'milugo', password: 'password' },
    { id: 2, username: 'john', password: 'password' }
];

require('dotenv').config();

// Utility function to generate JWT
function generateAccessToken(username) {
    return jwt.sign(username, process.env.SECRET_TOKEN, { expiresIn: '1800s' });
}

// Login route to generate JWT after verifying user credentials
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const accessToken = generateAccessToken({ username: user.username });
    res.json({ accessToken });
});

// Middleware to authenticate JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token not provided' });

    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token is invalid' });
        req.user = user;
        next();
    });
}

// Protected route that requires JWT authentication
app.get('/api/protected', (req, res) => {
    const users = [
        { id: 1, username: 'milugo', password: 'password' },
        { id: 2, username: 'john', password: 'password' }
    ];
    res.send(req.body.username);

});

app.get('/', (req, res) => {
    res.send(req.body.username);
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});