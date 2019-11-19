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
    userName: String,
    
    birthDate: Date

});

module.exports = mongoose.model('Admin', AdminSchema);