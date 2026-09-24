const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const employeeRoutes = require('./routes/employeeRoutes.js');
const departmentRoutes = require('./routes/departmentRoutes.js');
const attendanceRoutes = require('./routes/attendanceRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('connect successfully'))
    .catch((err) => console.log('Error happened', err));

app.use(employeeRoutes);
app.use(departmentRoutes);
app.use(attendanceRoutes);

app.listen(3000, () => {
    console.log('server is running successfully on port 3000');
});
