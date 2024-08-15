const express = require('express');
const app = express();
const router = express.Router();
const controller = require('./day17controller.js');


app.use(express.json());
app.use('/', controller);


app.get('/', (req, res) => {