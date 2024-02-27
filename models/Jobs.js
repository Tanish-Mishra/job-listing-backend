const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
   companyName: {
    type: String, 
    required: true,
   },
   title: {
    type: String, 
    required: true,
   },
   description: {
    type: String, 
    required: true,
   },
   logoUrl: {
    type: String, 
    required: true,
   },
   salary: {
    type: String, 
    required: true,
   },
   location: {
    type: String, 
    required: true,
   },
   duration: {
    type: String, 
    required: true,
   },
   locationType: {
    type: String, 
    required: true,
   },

},{timestamps: true})


const Jobs = mongoose.model('Jobs',jobSchema)
module.exports = Jobs