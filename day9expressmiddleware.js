const express = require('express');

const router = express.Router();
const app = express();


app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.use(express.json());


app.use("/router", router);


app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});


router.get('/', (req, res) => {
    res.send('Hello from the router!');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});