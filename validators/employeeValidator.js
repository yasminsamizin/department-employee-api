const {body}=require('express-validator');
const employeeRules=[
    body('name').notEmpty().withMessage('Name is required').isLength({min:3}).withMessage('Name Must be at least 3 characters long'),
    body('salary').notEmpty().isNumeric().withMessage('salary must be a number'),
    body('department').notEmpty().withMessage('Department is required')
];

module.exports=employeeRules;