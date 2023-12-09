const route=require("express").Router()
const User=require('../models/User')
const CryptoJS=require("crypto-js")
const jwt=require("jsonwebtoken")

//REGISTER
route.post("/register", async (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASS_KEY).toString(),

        
    });
    try{
    const saveUser= await newUser.save();
    res.status(201).json(saveUser)
} catch(err){
    res.status(500).json(err)
}
});

//LOGIN
route.post("/login",async(req,res)=>{
    try{
    const user=await User.findOne({username:req.body.username})
    !user && res.status(500).json("wrong credential")

    const hashedPassword=CryptoJS.AES.decrypt(user.password, process.env.PASS_KEY);

    const orginalPassword=hashedPassword.toString(CryptoJS.enc.Utf8)

    orginalPassword !== req.body.password && res.status(500).json("wrong credential")

    const accessToken=jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin
        },
        process.env.JWT_KEY,
        {expiresIn:"3d"}
    
    );

    const {password,...others}=user._doc

 

    res.status(200).json({...others,accessToken})

    }catch(err){
        res.send(500).json(err)
    }
})


module.exports=route