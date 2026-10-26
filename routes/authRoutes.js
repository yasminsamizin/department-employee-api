const express = require('express');
const router = express.Router();
const{registerUser,
logInUser
}=require('../controllers/authController.js');
const {UserRules}=require('../validators/authValidator.js');
const {logInRules}=require('../validators/loginValidator.js');

router.post('/register',UserRules,registerUser);
router.post('/login',logInRules,logInUser);
module.exports=router;