import express from 'express';
import User from './day27model';

const app = express();

const router = app.Router();

router.get('/', (req, res) => {
    res.send('Hello, Wellcome to expresss router');
});

router.get('/about', (req, res) => {
    res.send('About page');
});

router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).send(user);
    })
});



module.exports = router;