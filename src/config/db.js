const mongoose = require("mongoose");

module.exports = function(){

        mongoose.connect('mongodb://localhost:27017/Private_Blog').then(()=> {
            console.log("DB connection Successful") 
        }).catch(error => console.error('no connection', error));
}