const mongoose = require("mongoose");
const BikeSchema = new mongoose.Schema({
  ID: {
    type: Number,
    primaryKey: true,
    unique: true,
    required: true
  },
  state: String,
  category: String,
  colour: String,
  size: Number,
  condition: String,
  rate: Number, //decimal
  ownerSSN: {
    type: mongoose.Schema.ObjectId,
    ref: "Owner"
  },
  stationLocation: {
    type: mongoose.Schema.ObjectId,
    ref: "Station"
  }
});
module.exports = mongoose.model("Bike", BikeSchema);
