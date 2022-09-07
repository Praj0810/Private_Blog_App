const jwt = require("jsonwebtoken");
const jwtSecret =   "qwerty678";

async function authToken(req,res,next){
    const authHeader = req.header('authorization');
    const token = await authHeader.split(' ')[1];
    //console.log(authHeader, "print");
    if (token == null){
        res.status(400).send("token invalid Access denied");
    }
    try{
        const verification = jwt.verify(token, jwtSecret);
        req.userLogin = verification;
        //console.log(verification, "verify token");
        next();
    }catch(error){
        res.status(400).send({msg : "token is incorrect", error});

    }
}

module.exports = { authToken };
