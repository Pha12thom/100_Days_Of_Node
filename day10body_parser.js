import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/webview/login.html');
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'admin') {
        res.send('Login Successful');
    } else {
        res.send('Login Failed');
    }
});
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});