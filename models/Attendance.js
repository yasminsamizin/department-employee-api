const mongoose = require('mongoose');
const AttendanceSchema = new mongoose.Schema({
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee',
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    },
    status:{
        type:String,
        enum:['Present','Absent','Leave'],
        required:true
    }
})
module.exports = mongoose.model('Attendance',AttendanceSchema)