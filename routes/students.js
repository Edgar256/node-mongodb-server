const express = require('express');
const router = express.Router(); 
const Student = require('../models/Student.model')

// Get All Students
router.get('/' , (req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(err => res.status(400).json(`Error : ${err}`))
    console.log(`students retrieved successfully`);
});

//Find one student
router.get('/:id' , (req, res) => {
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json(`Error : ${err}`))
});

//Delete one student
router.delete('/:id' , (req, res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(students => res.json(`Student entry has been deleted`))
        .catch(err => res.status(400).json(`Error : ${err}`))
});

//Add a student
router.post('/',(req, res) => {
    const student = new Student({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        age : req.body.age
    });
    student.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message : err })
        })
})

//Update a student
// router.patch('/:id',(req, res) => {
//     Student.findById(req.params.id)
//         .then(student => {
//             student.first_name = req.body.first_name,
//             student.last_name = req.body.last_name,
//             student.age = req.body.age

//             student.save()
//                 .then(data => {res.json(data)})
//                 .catch(err => {res.json({ message : err })})
//         }) 
//         .catch(err => {res.json({ message : err })})   
// })

module.exports = router;