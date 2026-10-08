const {body}=require('express-validator');
const attendanceRules=[
    body('employee').notEmpty().withMessage('Employee is required'),
    body('date').notEmpty().withMessage('Date is required'),
    body('status').notEmpty().withMessage('Status is required')
];
module.exports=attendanceRules;