const Employee = require('../models/Employee.js');

// Create
const addEmployee = async (req, res) => {
    try {
        const emp = new Employee({
            name: req.body.name,
            salary: req.body.salary,
            department: req.body.department
        });
        await emp.save();
        res.status(201).send('Employee added successfully');
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Read
const showEmployees = async (req, res) => {
    try {
        const emps = await Employee.find().populate('department');
        res.status(200).json(emps);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Read one by id
const getEmployeeById = async (req, res) => {
    try {
        const emp = await Employee.findById(req.params.id).populate('department');
        if (!emp) return res.status(404).send({ message: 'Employee not found' });
        res.status(200).json(emp);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Update
const updateEmployee = async (req, res) => {
    try {
        const emp = await Employee.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            salary: req.body.salary,
            department: req.body.department
        }, { new: true, runValidators: true });
        if (!emp) return res.status(404).send({ message: 'Employee not found' });
        res.send('Employee updated successfully');
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Delete
const deleteEmployee = async (req, res) => {
    try {
        const emp = await Employee.findByIdAndDelete(req.params.id);
        if (!emp) return res.status(404).send({ message: 'Employee not found' });
        res.send('Employee deleted successfully');
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

//show Employee names

const showEmployeeNames = async (req, res) => {
    try {
        const emps = (await Employee.find()).map(emp=>emp.name);
        const empset=new Set(emps);
        res.status(200).json([...empset]);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
const showHighsalaryEmployees = async (req, res) => {
    try {
        const salaryFilter =Number(req.query.salary)||5000;
        const emps=(await Employee.find()).filter(emp=>emp.salary>salaryFilter).map(emp=>emp.name);
        res.status(200).json(emps);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getFirstHighEarner = async (req, res) => {
    try {
        const salaryFilter = Number(req.query.salary) || 5000;
        const emp = (await Employee.find()).find(emp => emp.salary > salaryFilter);
        if (!emp) return res.status(404).send({ message: 'No employee found with salary greater than ' + salaryFilter });
        res.status(200).json(emp);
        
    } catch (error) {
        res.status(500).send({ message: error.message });   
    }
}
module.exports = { addEmployee, showEmployees, getEmployeeById, updateEmployee, deleteEmployee, showEmployeeNames, showHighsalaryEmployees, getFirstHighEarner };
