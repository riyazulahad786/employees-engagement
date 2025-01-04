const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  totalGiven: { type: Number, default: 0 },
  totalReceived: { type: Number, default: 0 },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
