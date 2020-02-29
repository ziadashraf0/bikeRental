const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const autoIncrement = require("mongoose-auto-increment");
const Ride = require("../Models/Ride");
const Dependent = require("../Models/Dependent");

const ClientSchema = new mongoose.Schema({
  SSN: {
    type: String,
    required: true,
    unique: true,
    primaryKey: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  userName: {
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
    type: String,
    field: "bankAccountNumber",
    ref: "Bank"
  },
  dependent: [Dependent.schema],
  ride: [Ride.schema]
});
ClientSchema.pre("save", function(next) {
  const user = this;

  bcrypt.hash(user.password, 10, function(err, encrypted) {
    if (err) throw err;
    user.password = encrypted;
    next();
  });
});
//autoIncrement.initialize(mongoose);
//ClientSchema.plugin(autoIncrement.plugin, 'Client');
module.exports = mongoose.model("Client", ClientSchema);
