const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema({
    name:String,
    salary:Number,
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department'
    }
})
const Employee=mongoose.model('Employee',employeeSchema);
module.exports=Employee;