const express = require("express");
const app = express();

require('./config/db')();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

//import routes
const UserDetails = require("./routes/UserDetails");
const blogRout = require("./routes/blogRout");

//use routes
app.use("/UserDetails", UserDetails);
app.use("/blogRout", blogRout);

//PORT
const PORT = 9000;
app.listen(PORT, () =>{
    console.log('Server is running', PORT);
})
