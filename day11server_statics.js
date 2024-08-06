const express = require('express');
const app = express();


const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'webview')));
app.use('/static', express.static(path.join(__dirname, 'webview', 'css')));
app.use('/static', express.static(path.join(__dirname, 'webview', 'images')));
app.use('/static', express.static(path.join(__dirname, 'webview', 'js')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'webview', 'login.html'));
});

app.post('/login', (req, res) => {
    if (req.body.username === 'admin' && re.body.password === 'admin') {
        res.sendFile(path.join(__dirname, 'webview', 'home.html'));
    } else {
        res.sendFile(path.join(__dirname, 'webview', 'login.html'));
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://localhost:3000');
    console.log(path.join(__dirname, 'webview', 'login.html'));
});