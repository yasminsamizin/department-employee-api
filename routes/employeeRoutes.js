const express = require('express');
const router = express.Router();
const {
    addEmployee,
    showEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController.js');

router.post('/addEmployee', addEmployee);
router.get('/showEmployees', showEmployees);
router.get('/employee/:id', getEmployeeById);
router.put('/updateEmployee/:id', updateEmployee);
router.delete('/deleteEmployee/:id', deleteEmployee);

module.exports = router;
