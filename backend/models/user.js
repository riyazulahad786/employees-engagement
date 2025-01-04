const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true,
        trim: true 
    },
    password: {
        type: String,
        required: true
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    }
});

const users = mongoose.model('user', userSchema);
module.exports = users;
