const express = require('express');
const router = express.Router();
const {
    addDept,
    showDepts,
    updateDept,
    deleteDept
} = require('../controllers/departmentController.js');
const departmentRules=require('../validators/departmentValidator.js');

router.post('/addDept', departmentRules, addDept);
router.get('/showDepts', showDepts);
router.put('/updateDept/:id', departmentRules, updateDept);
router.delete('/deleteDept/:id', deleteDept);

module.exports = router;
