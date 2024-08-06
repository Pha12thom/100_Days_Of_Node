const express = require('express');
const app = express();


const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'webview')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'webview', 'about.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});