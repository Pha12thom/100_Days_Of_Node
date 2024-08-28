import express from 'express';

const app = express();

const router = app.Router();

router.get('/', (req, res) => {
    res.send('Hello, Wellcome to expresss router');
});

router.get('/about', (req, res) => {
    res.send('About page');
});

router.get('/user/:id', (req, res) => {
    res.send('User page');
});



module.exports = router;