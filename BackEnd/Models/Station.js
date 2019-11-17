const mongoose = require('mongoose');
const StationSchema = new mongoose.Schema({

    location: {
        type: String,
        primaryKey: true,
        required: true,
        unique: true
    },
    capacity: Number,
    bikesNumber :Number,
	ridesNumber:Number

});
module.exports = mongoose.model('Station', StationSchema);