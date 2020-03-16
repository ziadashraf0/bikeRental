const mongoose = require("mongoose");



const NotificationSchema = new mongoose.Schema({
  type:{
      type:String,
      enum:['Dependent Request','Request Confirmed','Promo Code']
  },
  viewed:Boolean,
  message:String
});


module.exports = mongoose.model("Notification", NotificationSchema);
