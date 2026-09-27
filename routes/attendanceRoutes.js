const express = require('express');
const router = express.Router();
const {
    addAttendance,
    showAttendance,
    updateAttendance,
    deleteAttendance,
    showAttendanceByEmployee
} = require('../controllers/attendanceController');


router.post('/addAttendance',addAttendance)
router.get('/showAttendance',showAttendance)
router.put('/updateAttendance/:id',updateAttendance)
router.delete('/deleteAttendance/:id',deleteAttendance)
router.get('/showAttendanceByEmployee/:employeeId',showAttendanceByEmployee)
module.exports=router;