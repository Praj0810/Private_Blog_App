const mongoose = require("mongoose");
const Users = require('./userSignUp');

const blogSchema = new mongoose.Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'Users'
    },
    tittle : {
        type : String,
        max : 50,
        required : true
    },
    body : {
        type : String,
        max : 300,
        required : true

    },
    tags : {type: [String]}
    }
,{
    timestamps : true
});

const Blogs =  mongoose.model("Blogs", blogSchema);
module.exports = Blogs;

