const {body}=require('express-validator');
const User=require('../models/User.js');

const UserRules=[
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required').isLength({min:6}).withMessage('Password must be at least 6 characters long')
]
module.exports={UserRules};