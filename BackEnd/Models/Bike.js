const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const BikeSchema = new mongoose.Schema({
        
    state: {
        type:String,
        enum:['Available','Unvailable']
    },
    category: String,
    colour: String,
    size: Number,
    condition: String,
    rate: Number,           //decimal
    ownerSSN: {
        type:String ,field:'SSN', ref: 'Owner'

    }
    ,stationLocation: {
        type: String,field:'location', ref: 'Station'

    }
});
autoIncrement.initialize(mongoose);
BikeSchema.plugin(autoIncrement.plugin, 'Bike');
module.exports = mongoose.model('Bike', BikeSchema);