const Department = require('../models/Department.js');

// Create
const addDept = async (req, res,next) => {
    try {
        const dept = new Department({
            name: req.body.name,
            location: req.body.location
        });
        await dept.save();
        res.status(201).send('Department added successfully');
    } catch (error) {
        next(error);
    }
};

// Read
const showDepts = async (req, res,next) => {
    try {
        const depts = await Department.find();
        res.status(200).json(depts);
    } catch (error) {
        next(error);
    }
};

// Update
const updateDept = async (req, res,next) => {
    try {
        const dept = await Department.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            location: req.body.location
        }, { new: true, runValidators: true });
        if (!dept) return res.status(404).send({ message: 'Department not found' });
        res.send('Department updated successfully');
    } catch (error) {
        next(error);
    }
};

// Delete
const deleteDept = async (req, res,next) => {
    try {
        const dept = await Department.findByIdAndDelete(req.params.id);
        if (!dept) return res.status(404).send({ message: 'Department not found' });
        res.send('Department deleted successfully');
    } catch (error) {
        next(error);
    }
};

module.exports = { addDept, showDepts, updateDept, deleteDept };
