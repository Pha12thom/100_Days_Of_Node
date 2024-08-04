const express = require('express');
const app = express();

app.get('/', function(req, res) {
    try {
        res.send('No error here');

    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});