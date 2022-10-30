const jwt = require('jsonwebtoken')
const Secret = "Ash$Ash"

const FetchUser = (req,res,next)=>{
    const token = req.header("auth-token");

    if(!token){
        res.status(401).send({eror: "Use valid token"});
    }

    try {
        const id = jwt.verify(token,Secret);
        req.user = id;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error:"Internal error"});
    }
}

module.exports = {Secret, FetchUser};
