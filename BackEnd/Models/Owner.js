const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
//const bcrypt = require('bcryptjs')
const OwnerSchema = new mongoose.Schema({

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
    }
});
/*playerSchema.pre('save', function (next) {
    const user = this

    bcrypt.hash(user.password, 10, function (err, encrypted) {
        if (err) throw err;
        user.password = encrypted
        next()
    })
})
*/
module.exports = mongoose.model('Owner', OwnerSchema);