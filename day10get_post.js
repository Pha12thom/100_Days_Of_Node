const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'webview')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'webview', 'home.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'webview', 'login.html'));
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'user') {
        res.redirect(`/welcome?username=${username}`);
    } else {
        res.send('Invalid credentials');
    }
});


app.get('/welcome', (req, res) => {
    const { username } = req.query;
    res.send(`Welcome, ${username}!`);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
