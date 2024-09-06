import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: 'http://localhost:8000', // Allowed origin
    methods: 'GET,POST', // Allowed methods
};

app.get('/', (req, res) => {
    res.send('CORS is not enabled on this route.');
});


app.get('/api/data', cors(corsOptions), (req, res) => {
    res.json({ message: 'This route has CORS enabled for https://example.com' });
});


app.post('/api/submit', cors(), (req, res) => {
    res.json({ message: 'CORS enabled for all origins on this route.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});