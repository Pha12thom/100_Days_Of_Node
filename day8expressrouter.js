const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is express routing for the homepage');
});

router.get('/about', (req, res) => {
    res.send('This is express routing for the about page');
});

router.get('/contact', (req, res) => {
    res.send('This is express routing for the contact page');
});

module.exports = router;