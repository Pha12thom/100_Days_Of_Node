const express = require('express');
const app = express();
port = 3000;

app.get('/', (req, res) => {
    req.sendFile(__dirname + '/webview/home.html');
})

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})