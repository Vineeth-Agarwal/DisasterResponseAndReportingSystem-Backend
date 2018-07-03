// Schema for the report incident

const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var reportSchema = new Schema({

    reportID: String,
    reportedBy: String,
    incidentName: String, // this should be automatically fetched from incidents model
    location: String,
    files: String,
    casualities: {
        red: String,
        yellow: String,
        green: String,
        black: String
    },
    structuralDamage: String,
    fire: String,
    utilities: String,
    hazmat: String
});

module.exports = mongoose.model('Reports', reportSchema);