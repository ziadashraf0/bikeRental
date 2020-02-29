const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
const autoIncrement = require('mongoose-auto-increment');
const DependentSchema=new mongoose.Schema({
        
    
        name: String,
        birthDate: Date,
        relationship: String,
        password:String

    });
    DependentSchema.pre('save', function (next) {
        const user = this
      
        bcrypt.hash(user.password, 10, function (err, encrypted) {
          if (err) throw err;
          user.password = encrypted
          next()
        })
      })
autoIncrement.initialize(mongoose);
DependentSchema.plugin(autoIncrement.plugin, 'Dependent');
module.exports=mongoose.model('Dependent', DependentSchema);