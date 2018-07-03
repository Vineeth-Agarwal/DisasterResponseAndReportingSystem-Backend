// Schema for the signup

const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var signupSchema = new Schema({

    firstName: String,
    lastName: String,
    email: String,
    password: String,
    files: String
});

module.exports = mongoose.model('Signup', signupSchema);