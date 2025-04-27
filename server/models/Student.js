const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
  department: { type: String, required: true },
  enrollmentYear: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Student', studentSchema);
