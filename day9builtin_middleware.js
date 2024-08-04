const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/example', (req, res) => {
    console.log(req.body);
    res.send('Data received!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});