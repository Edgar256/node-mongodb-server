const express = require('express');
const router = express.Router(); 
const Teacher = require('../models/Teacher.model');
const { roles } = require('../roles')

// Get All Teachers
router.get('/' , (req, res) => {
    Teacher.find()
        .then(teachers => res.json(teachers))
        .catch(err => res.status(400).json(`Error : ${err}`))
    console.log(`teachers retrieved successfully`);
});

//Find one Teacher
router.get('/:id' , (req, res) => {
    Teacher.findById(req.params.id)
        .then(teacher => res.json(teacher))
        .catch(err => res.status(400).json(`Error : ${err}`))
});

//Delete one Teacher
router.delete('/:id' , (req, res) => {
    Teacher.findByIdAndDelete(req.params.id)
        .then(teachers => res.json(`Teacaher entry has been deleted`))
        .catch(err => res.status(400).json(`Error : ${err}`))
});

//Add a teacher
router.post('/',(req, res) => {
    const teacher = new Teacher({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        subject : req.body.subject,
        age : req.body.age,
        role : roles.teacher
    });
    teacher.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message : err })
        })
})

// Update a student
router.patch('/:id',(req, res) => {
    Teacher.findById(req.params.id)
        .then(teacher => {
            teacher.first_name = req.body.first_name,
            teacher.last_name = req.body.last_name,
            teacher.age = req.body.age

            teacher.save()
                .then(data => {res.json(data)})
                .catch(err => {res.json({ message : err })})
        }) 
        .catch(err => {res.json({ message : err })})   
})

module.exports = router;