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


router.get('/students/', (req, res) => {
    res.json(students);
});



router.get('/students/:id', (req, res) => {
    const id = req.params.id;

    const student = students[id - 1];
    res.json(student);


});

router.post('/students/', (req, res) => {
    const student = req.body;
    students.push(student);
    res.send('student added');
});

module.exports = router;