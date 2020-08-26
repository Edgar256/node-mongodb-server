const express = require('express');
const router = express.Router(); 
const Admin = require('../models/Admin.model');
const { roles } = require('../roles')

// Get All admins
router.get('/' , (req, res) => {
    Admin.find()
        .then(admins => res.json(admins))
        .catch(err => res.status(400).json(`Error : ${err}`))
    console.log(`admins retrieved successfully`);
});

//Find one admin
router.get('/:id' , (req, res) => {
    Admin.findById(req.params.id)
        .then(admin => res.json(admin))
        .catch(err => res.status(400).json(`Error : ${err}`))
});

//Delete one admin
router.delete('/:id' , (req, res) => {
    Admin.findByIdAndDelete(req.params.id)
        .then(admin => res.json(`Admin entry has been deleted`))
        .catch(err => res.status(400).json(`Error : ${err}`))
});

//Add a student
router.post('/',(req, res) => {
    const admin = new Admin({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        role : roles.admin
    });
    admin.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message : err })
        })
})

// Update a admin
router.patch('/:id',(req, res) => {
    Admin.findById(req.params.id)
        .then(admin => {
            admin.first_name = req.body.first_name,
            admin.last_name = req.body.last_name,
            admin.age = req.body.age

            admin.save()
                .then(data => {res.json(data)})
                .catch(err => {res.json({ message : err })})
        }) 
        .catch(err => {res.json({ message : err })})   
})

module.exports = router;