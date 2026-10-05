const Attendance=require('../models/attendance.js');
//create
const addAttendance=async(req,res)=>{
    try{
        const attendance=new  Attendance({
            employee:req.body.employee,
            date:req.body.date,
            status:req.body.status
        })
        await attendance.save();
        res.status(201).send('Attendance added successfully')
    }   catch(error){
        res.status(400).send({message:error.message})
    }
  }

const showAttendance=async(req,res)=>{
    try{
        const filter={};
        if(req.query.status){
            filter.status=req.query.status;
        }
        const attendance=await Attendance.find(filter).populate('employee');
        res.status(200).send(attendance);
        
    } catch(error){
        res.status(400).send({message:error.message});
    }
}
const updateAttendance=async(req,res)=>{
    try{
        const attendance=await Attendance.findByIdAndUpdate(req.params.id,{ 
            employee:req.body.employee,
            date:req.body.date,
            status:req.body.status
        });
        res.status(200).send('Attendance updated successfully');
    } catch(error){
        res.status(400).send({message:error.message});
    }
}
const deleteAttendance=async(req,res)=>{
    try{
        const attendance=await Attendance.findByIdAndDelete(req.params.id); 
        res.status(200).send('Attendance deleted successfully');
    } catch(error){
        res.status(400).send({message:error.message});
    }
}
const showAttendanceByEmployee=async(req,res)=>{
    try {
        const attendance=await Attendance.find({employee:req.params.employeeId}).populate('employee');
        res.status(200).send(attendance);
        
    } catch (error) {
        res.status(400).send({message:error.message});  
    }
}
module.exports={addAttendance,showAttendance,updateAttendance,deleteAttendance,showAttendanceByEmployee}