const mongoose=require('mongoose');
const ProjectSchema=new mongoose.Schema({
    title:{
        type:String,
        minlength:3,
        required:true
    },employees:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Employee'
    }]
})
module.exports=mongoose.model('Project',ProjectSchema)
