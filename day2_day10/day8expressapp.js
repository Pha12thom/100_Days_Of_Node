const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('this is express routing');
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});