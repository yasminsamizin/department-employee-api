const {validationResult}=require('express-validator');
const Project=require('../models/Project.js');

//add project
const addProject=async(req,res,next)=>{
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).send({errors:errors.array()});
        }       
        const project=new Project({
            title:req.body.title,
            employees:req.body.employees
        });
        await project.save();
        res.status(201).send('Project added successfully');
    } catch (error) {
        next(error);
    }   
}

//Show all projects
const showProjects=async(req,res,next)=>{
    try{
        
        const projects=await Project.find().populate('employees');
        res.status(200).send(projects);
    } catch (error) {
        next(error);
    }  
}

module.exports={addProject,showProjects}