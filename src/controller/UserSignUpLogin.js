const Users = require("../models/userSignUp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = "qwerty678";

//user signUp:
const signUp = async(req,res) => {
    //console.log(req.body.emailId, "hi user");
    try {
        if (req.body.password === req.body.confirmPassword) {
        const user = new Users({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            emailId : req.body.emailId,
            password : await bcrypt.hash(req.body.password, 10),
        });
        await user.save();
        res.send({msg: "User SignUp Successfully"});
        }else{
            res.send({msg: "password and confirmPassword do not match"});
        }        
    }catch (error){
        res.status(400).send({ msg : "something went wrong"})
    }
}

//-------------------------------------------------------------------------------------------//
//user login:
const login = async(req,res) => {
    try{
        const { emailId, password } = req.body;
        if (!emailId || !password ){
            return res.status(400).send({error : "Please enter the data"});
        }
        const userLogin = await Users.findOne({emailId : emailId, deleted : false});

        if(userLogin) {
            const validPassword = await bcrypt.compare(password , userLogin.password);
            if(!validPassword) {
                res.status(400).send({error : "Enter correct password"});
            }else {
                const token = jwt.sign({_id:userLogin._id}, jwtSecret);
                res.status(200).send({token: token, msg : "user login Successfully"});
            }
        }else{
            res.status(400).send({msg: "Invalid Credentials"});
        }
    }catch(error){
        res.status(400).send({msg:"Something went wrong "});
    }
}

module.exports = {signUp , login};