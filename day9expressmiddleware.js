const express = require('express');
const morgan = require('morgan');
const app = express();

// Built-in middleware to parse JSON
app.use(express.json());

// Third-party middleware for logging
app.use(morgan('dev'));

// Application-level middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// Route-level middleware
app.get('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
}, (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
}, (req, res) => {
    res.send('User Info');
});

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});