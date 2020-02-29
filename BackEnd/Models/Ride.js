const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const RideSchema = new mongoose.Schema({
        
    bikeID: String,
    rideNumber: Number,
    price: mongoose.Decimal128,
    duration: Number,
    date: {
      type: Date,
      default: Date.now
    },
    arrivalStation: String,
    departureStation: String,
    numberOfHours: Number
});
autoIncrement.initialize(mongoose);
RideSchema.plugin(autoIncrement.plugin, { model: 'RideSchema', field: 'rideNumber' });

//BikeSchema.plugin(autoIncrement.plugin, 'Bike');
module.exports = mongoose.model('Ride', RideSchema);