const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    location: { type: String, required: true }
});

module.exports = mongoose.model('Department', departmentSchema);
