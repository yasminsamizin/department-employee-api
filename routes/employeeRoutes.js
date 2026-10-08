const express = require('express');
const router = express.Router();
const {
    addEmployee,
    showEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
    showEmployeeNames,
    showHighsalaryEmployees,
    getFirstHighEarner
} = require('../controllers/employeeController.js');
 const employeeRules=require('../validators/employeeValidator.js');

router.post('/addEmployee', employeeRules, addEmployee);
router.get('/showEmployees', showEmployees);
router.get('/employee/:id', getEmployeeById);
router.get('/employeeNames', showEmployeeNames);
router.get('/highSalaryEmployees', showHighsalaryEmployees);
router.get('/firstHighEarner', getFirstHighEarner);
router.put('/updateEmployee/:id', employeeRules, updateEmployee);
router.delete('/deleteEmployee/:id', deleteEmployee);

module.exports = router;
