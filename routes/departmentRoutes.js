const express = require('express');
const router = express.Router();
const {
    addDept,
    showDepts,
    updateDept,
    deleteDept
} = require('../controllers/departmentController.js');

router.post('/addDept', addDept);
router.get('/showDepts', showDepts);
router.put('/updateDept/:id', updateDept);
router.delete('/deleteDept/:id', deleteDept);

module.exports = router;
