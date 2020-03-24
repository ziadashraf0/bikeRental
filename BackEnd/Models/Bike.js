const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const BikeSchema = new mongoose.Schema({
        
    state: {
        type:String,
        enum:['Available','Not Available']
    },
    category: String,
    colour: String,
    size: Number,
    condition: String,
    rate: Number,           //decimal
    ownerSSN:String 
     ,stationName: String
});
autoIncrement.initialize(mongoose);
BikeSchema.plugin(autoIncrement.plugin, 'Bike');
module.exports = mongoose.model('Bike', BikeSchema);