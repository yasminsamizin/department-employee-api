const express=require('express');
const app=express();
app.use(express.json());

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
require('dotenv').config();

const mongoose=require('mongoose');
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('connect successfully'))
    .catch((err) => console.log('Error happened', err));




const Employee = require('./employeeModel.js');
const Department=require('./departmentModel.js');
  
// dept crud
app.post('/addDept',async (req,res) => {
    try {
        const dept=new Department({
        name:req.body.name,
        location:req.body.location
    })
    await dept.save();
    res.send('Department added successfully');
    } catch (error) {
        console.log(error);
    }
    
})

app.get('/showDepts',async (req,res) => {
    try {
        const depts=await Department.find();
        res.send(depts);
        console.log(depts);
    } catch (error) {
      console.log(error)
    }
})
app.put('/updateDept/:id',async (req,res) => {
    try {
        const dept=await Department.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            location:req.body.location
        });
        res.send('Department updated successfully');
    } catch (error) {
        console.log(error);
    }
});
 app.delete('/deleteDept/:id',async (req,res) => {
    try {
        const dept=await Department.findByIdAndDelete(req.params.id);
        res.send('Department deleted successfully');
    } catch (error) {
        console.log(error);
    }
});


// employee CRUD
app.post('/addEmployee',async (req,res) => {
    try {
        const emp=new Employee({
        name:req.body.name,
        position:req.body.position,
        department:req.body.department
    })
    await emp.save();
    res.send('Employee added successfully');
    } catch (error) {
        console.log(error);
    }
    
})
 
app.get('/showEmployees',async (req,res) => {
    try {
        const emps=await Employee.find().populate('department');
        res.send(emps);
    } catch (error) {
        console.log(error);
    }
});
app.put('/updateEmployee/:id',async (req,res) => {
    try {
        const emp=await Employee.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            position:req.body.position,
            department:req.body.department
        });
        res.send('Employee updated successfully');
    } catch (error) {
        console.log(error);
    }
});

app.delete('/deleteEmployee/:id',async (req,res) => {
    try {
        const emp=await Employee.findByIdAndDelete(req.params.id);      
        res.send('Employee deleted successfully');
    } catch (error) {
        console.log(error);
    }
});

app.listen(3000,async () => {
    try{
    console.log('server is running successfully on port 3000');
    }
    catch(error)
    {
        console.log(error);
    }  
})
