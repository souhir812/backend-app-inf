const User=require("../models/User")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 

exports.register=async(req,res)=>{
    let {name,email,password}=req.body
    try {
        const foundUser=await User.findOne({email});
        if (foundUser){
            return res.status(400).send({errors: [{msg :'user already exists'}]});
        }
        const user=new User ({
            name,email,password    
        })

        const salt=10;
        user.password=await bcrypt.hash(password,salt);
     await user.save()

     //token
     const payload={
        id:user._id,
     };
     const token=jwt.sign(payload,process.env.secretKey,{expiresIn:"30d"})


     res.status(201).send({msg:"register with success",user,token})   
    } catch (error) {
       res.status(500).send("server error") 
    }
}
exports.login = async(req,res)=>{
    const {email,password}=req.body
    try {
        //check user exists
       const user=await User.findOne({email});
       if(!user) {
        return res.status(400).send({errors: [{msg :'Email does not exists !!'}]});
       }
       //compare passwords
       const isMatch=await bcrypt.compare(password,user.password)
       if(!isMatch){
        return res.status(400).send({errors: [{msg :'Passwords does not match !!'}]});
       }
    
    //token
    const payload={
        id:user._id,
     };
     const token=jwt.sign(payload,process.env.secretKey,{expiresIn:"30d"})
     res.status(200).send({msg:"Login with success",user,token})

    } catch (error) {
       res.status(500).send("server error") 
    }
}
exports.current=async(req,res)=>{
    try {
        const user=await User.findById(req.user.id)
        res.send(user)
    } catch (error) {
        res.status(500).send("server error")  
    }
}