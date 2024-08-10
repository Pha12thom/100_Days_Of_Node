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

router.put('/students/student/', (req, res) => {

    const updateStudent = req.body;
    res.json(updateStudent);



});

module.exports = router;