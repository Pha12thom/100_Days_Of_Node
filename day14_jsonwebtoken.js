const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const students = [{
        id: 1,
        name: 'milugo Geofrey',
        age: 21,
        course: 'Mathematics and CCS',
    },
    {
        id: 2,
        name: 'John Doe',
        age: 24,
        course: 'CCS',

    }
];

require