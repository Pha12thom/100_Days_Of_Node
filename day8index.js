const express = require("express");
const app = express();
const port = 3000;
const fileRoots = require('./day8expressrouter.js');

app.use('/', fileRoots);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});