const express = require('express');
const app = express();

// Example of built-in middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({
    extended: true
})); // Parses URL-encoded data

app.post('/data', (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});