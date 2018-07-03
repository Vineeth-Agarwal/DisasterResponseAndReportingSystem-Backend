// Schema for the CERT member who got approved

const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var memberSchema = new Schema({
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

module.exports = mongoose.model('Members', memberSchema);