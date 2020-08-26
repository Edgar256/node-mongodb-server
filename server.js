const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Route imports
const studentsRoute = require('./routes/students');
const teachersRoute = require('./routes/teachers');
const adminRoute = require('./routes/admin');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// protected routes ie Students Dashboard, Teachers Dashboaord, Admin Dashboard
app.use('/students', studentsRoute);
app.use('/teachers', teachersRoute);
app.use('/admin', adminRoute);

// Routes
app.get('/' , (req,res) => {
    res.send(`We are on home page. Wow !`);
})

// Connect to the DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useUnifiedTopology: true , 
        useNewUrlParser: true 
    },     
    () => console.log(`connected to Db`)
)

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`We are listen on port ${port}`));