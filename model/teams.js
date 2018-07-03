// schema for the creating teams

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

module.exports = mongoose.model('Teams', teamSchema);