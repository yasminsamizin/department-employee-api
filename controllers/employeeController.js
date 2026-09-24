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

module.exports = { addEmployee, showEmployees, updateEmployee, deleteEmployee };
