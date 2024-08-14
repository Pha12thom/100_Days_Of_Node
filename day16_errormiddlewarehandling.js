const express = require('express');
const app = express();

app.use(express.json());


app.get('/api/triggerError', (req, res, next) => {
    next(new Error('Intentional Error'));
});


app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});