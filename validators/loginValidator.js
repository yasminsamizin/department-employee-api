const {body}=require('express-validator');
const User=require('../models/User.js');

const logInRules=[
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format').custom(async(value)=>{
        const user=await User.findOne({email:value});
        if(!user){
            throw new Error('Invalid email or password');
        }
    }),
    body('password').notEmpty().withMessage('Password is required').isLength({min:6}).withMessage('Password must be at least 6 characters long')
]
module.exports={logInRules};