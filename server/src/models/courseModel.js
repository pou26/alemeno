const mongoose = require('mongoose');

const Courseschema = new mongoose.Schema({
   courseName: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   currencyFormat: { 
    type: String, 
    required: true, 
    default: "₹" },

   price: {
    type: Number,
    required: true
 },
   duration:{
    type: String,
    required: true
   },
   enrollmentStatus:{
    type: [String], 
    enum: ["Open","Closed","In Progress"], 
   },
   schedule:{
    type: String,
    required: true
   },
   location:{
    type: String,
    required: true
   },
   syllabusTitle:{
    type: String,
    required: true
   },
   syllabusdesc:{
    type: String,
    required: true
   },
   instructor: {
      type: String,
      required: true
   },
   courseImage: { 
    type: String 
}
}, { timestamps: true });

module.exports = mongoose.model('Course', Courseschema);