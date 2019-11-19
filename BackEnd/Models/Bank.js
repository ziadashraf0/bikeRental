const mongoose = require('mongoose');
const BankSchema = new mongoose.Schema({
   
    bankAccountNumber: {
        type: String,
        unique: true,
        required: true,
        primaryKey: true
    },
    name: String,
    Balance: mongoose.Decimal128,
    cardValidityDate: Date,
    PIN: Number,
    cardNumber: Number,
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: String,
    
});
module.exports = mongoose.model('Bank', BankSchema);