const {body}= require('express-validator');

const departmentRules = [
    body('name').notEmpty().withMessage('Name is required').isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('location').notEmpty().withMessage('Location is required')
];

module.exports = departmentRules;
