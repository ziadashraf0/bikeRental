const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({

    SSN: {
        type: Number,
      required: true,
       unique: true,
       primaryKey: true
    },
    email: {
        type: String,

       required: true,
       unique: true
    },
    password: String,
    phoneNumber: String,
    userName: {
        type: String,

        required: true,
        unique: true
    },
    
    birthDate: Date

});

module.exports = mongoose.model('Admin', AdminSchema);