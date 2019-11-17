const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({

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
    firstName: String,
    lastName: String,
    birthDate: Date,
    bankAccountNumber: {
        type: mongoose.Schema.ObjectId, ref: 'Bank'
    },
    dependant: 
        [{
            name: String,
            birthDate: Date,
            relationship: String
        }] ,
ride: 
    [{
        bikeID: Number,
        rideNumber: Number,
        price: Number,
        duration: Number,
        date: Date,
        arrivalStation: String,
        departureStation: String,
        numberOfHours: Number
    }
        ]

});

module.exports = mongoose.model('Client', ClientSchema);