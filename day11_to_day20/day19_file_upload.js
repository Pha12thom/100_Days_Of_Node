import express from 'express';
import multer from 'multer';
import path from 'path';
import User from './day19model';
const app = express();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });


app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded');
});

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});