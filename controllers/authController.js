const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User.js');
const {validationResult}=require('express-validator');

const registerUser=async(req,res,next)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).send({errors:errors.array()});
        }
        const newUser=new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        const salt = await bcrypt.genSalt(10);
        newUser.password=await bcrypt.hash(newUser.password,salt);
        await newUser.save();
        res.status(201).send('User registered successfully');
        
    } catch (error) {
        next(error);
    }
}
const logInUser=async(req,res,next)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).send({errors:errors.array()});
        }
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).send('User not found');
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).send('User not found');
        }
        const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.json({token});
    } catch ( error) {
        next(error);
    }
}
module.exports={registerUser, logInUser};