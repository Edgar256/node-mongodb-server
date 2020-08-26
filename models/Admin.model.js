const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : true
    },
    last_name : {
        type : String,
        required : true
    },
    role:{
        type : String,
        required : true
    },
    reg_date:{
        type : Date ,
        default : Date.now
    }
});

module.exports = mongoose.model('admins', AdminSchema);