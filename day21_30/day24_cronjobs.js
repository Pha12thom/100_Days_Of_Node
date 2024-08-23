import express from 'express';
import task from './crontask1.js';

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});