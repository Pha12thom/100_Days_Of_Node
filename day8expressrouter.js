const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.send('this is express routing for homepage');
});

router.get('/about', (req, res, next) => {
    res.send('this is express routing for about page');
});

router.get('/contact', (req, res, next) => {
    res.send('this is express routing for contact page');
});

module.export = router;