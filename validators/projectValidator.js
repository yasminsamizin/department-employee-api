const {body}=require('express-validator');
const projectRules=[
    body('title').notEmpty().withMessage('Project title is required')
    .isLength({min:3}).withMessage('Project title must be at least 3 characters long')    
];
module.exports=projectRules;