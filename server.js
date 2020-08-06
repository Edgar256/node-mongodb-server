const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Route imports
const studentsRoute = require('./routes/students');

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/students', studentsRoute);

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