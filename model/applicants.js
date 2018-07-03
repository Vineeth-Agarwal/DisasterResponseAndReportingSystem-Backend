// schema for the applicants who applied for the CERT

const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var applicantSchema = new Schema({
  firstName:  String,
  lastName: String,
  email:   String,
  dob: { type: Date, default: Date.now },
  mobileNumber: String,
  address1: String,
  address2: String,
  county: String,
  city: String,
  state: String,
  country: String,
  skills: String,
  licenseNumber: String,
  files: String,
  limitations: String,
  pushNotification: String
});

module.exports = mongoose.model('Applicants', applicantSchema);