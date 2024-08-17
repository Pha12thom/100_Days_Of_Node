import express from 'express';
import multer from 'multer';


const upload = multer({ dest: 'uploads/' });
const app = express();

app.post('/upload', upload.single('avatar'), (req, res) => {
    res.send('File uploaded');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});