import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    employeeID: {
        type: Number,
        required: true
    }
});

const employee = mongoose.model('employee', employeeSchema);

export default employee;