const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb+srv://admin:admin123@cluster0-5iafy.mongodb.net/drrs?retryWrites=true"
    , success => {
        console.log("DB Connected")
    }, err => {
        console.log("error")
    })