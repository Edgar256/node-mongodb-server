const mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    role:{
        type : String,
        required : true
    },
    subject:{
        type : String,
        required : true
    },
    reg_date:{
        type : Date ,
        default : Date.now
    }
});

module.exports = mongoose.model('teachers', TeacherSchema);