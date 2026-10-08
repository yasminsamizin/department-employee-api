const express = require('express');
const router = express.Router();
const {
    addAttendance,
    showAttendance,
    updateAttendance,
    deleteAttendance,
    showAttendanceByEmployee
} = require('../controllers/attendanceController');
const attendanceRules=require('../validators/attendanceValidator.js');


router.post('/addAttendance',attendanceRules,addAttendance)
router.get('/showAttendance',showAttendance)
router.put('/updateAttendance/:id',attendanceRules,updateAttendance)
router.delete('/deleteAttendance/:id',deleteAttendance)
router.get('/showAttendanceByEmployee/:employeeId',showAttendanceByEmployee)
module.exports=router;