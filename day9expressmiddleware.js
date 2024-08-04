const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(" welcome to express js");

});

app.listen(port, () => {
    console.log(`running on http://localhost:${port}`);
});