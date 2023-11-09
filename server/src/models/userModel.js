const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;

const userschema = new mongoose.Schema({
   fname: {
      type: String
   },
   lname: {
    type: String
 },
   courseName :{
    type : String,
   },
   email: {
      type: String
   },
   phone: {
      type: Number
   },

password : {
    type:String,
    required:true
},

}, { timestamps: true });

module.exports = mongoose.model('User', userschema);