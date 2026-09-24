const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    salary: { type: Number, required: true },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);
