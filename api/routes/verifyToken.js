const jwt=require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    authHeader=req.headers.token;
    if(authHeader){
        const token=authHeader.split(" ")[1];
        jwt.verify(token,process.env.JWT_KEY, (err,user)=>{
            if(err) res.status(401).json("Invalid Token")
            req.user=user;
            next();
        })

    }else{
        return res.status(401).json("You are note authenticated")
    }
}

const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin)
        {
            next();
        }else{
            return res.status(401).json("You are not allowed to do it")
        }
    })
}

const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin)
        {
            next();
        }else{
            return res.status(401).json("You are not allowed to do it")
        }
    })
}

module.exports={verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin};