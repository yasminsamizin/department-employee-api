const Department = require('../models/Department.js');

// Create
const addDept = async (req, res) => {
    try {
        const dept = new Department({
            name: req.body.name,
            location: req.body.location
        });
        await dept.save();
        res.status(201).send('Department added successfully');
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Read
const showDepts = async (req, res) => {
    try {
        const depts = await Department.find();
        res.status(200).json(depts);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Update
const updateDept = async (req, res) => {
    try {
        const dept = await Department.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            location: req.body.location
        }, { new: true, runValidators: true });
        if (!dept) return res.status(404).send({ message: 'Department not found' });
        res.send('Department updated successfully');
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

// Delete
const deleteDept = async (req, res) => {
    try {
        const dept = await Department.findByIdAndDelete(req.params.id);
        if (!dept) return res.status(404).send({ message: 'Department not found' });
        res.send('Department deleted successfully');
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = { addDept, showDepts, updateDept, deleteDept };
