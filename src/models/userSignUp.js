const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    emailId : {
        type: String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

const Users =  mongoose.model("user", UserSchema);

module.exports = Users ;