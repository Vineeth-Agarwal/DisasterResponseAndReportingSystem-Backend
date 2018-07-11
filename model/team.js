// @author Sreevani Anoohya Tadiboina
//   This page refers to development of schema for the team model

const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var teamSchema = new Schema({
    teamID: String,
    teamName: String,
    members: {
        firstName: String,
        lastName: String,
        email: String,
        county: String,
        role: String // drop down { leader, asst. leader, member }
    }
});

module.exports = mongoose.model('team', teamSchema);