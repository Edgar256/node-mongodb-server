const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
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
    reg_date:{
        type : Date ,
        default : Date.now
    }
});

module.exports = mongoose.model('students', StudentSchema);