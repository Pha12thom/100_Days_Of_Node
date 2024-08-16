const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
app = express();
const dotenv = require('dotenv');
const router = require('../routes/userRoutes.js');
app.use(bodyParser.json);
dotenv.config();

PORT = 3000;

app.use('/api/user', router);

mongoose.connect('mongodb://localhost:27017/').then(() => {
        console.log("mongo db server connected successsfully");
    }

).catch((error) => {
    console.error(error);
});


app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
})