const router = require('./myapi.js');
const express = require('express');
const app = express();

app.use('/', router);


app.listen(3000, () => {
    console.log('app running on port 3000');
});