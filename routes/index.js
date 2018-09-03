var express = require('express');
var router = express.Router();
var applicant = require("../model/applicant");
var incident = require("../model/incident");
var report = require("../model/report");
var membere = require("../model/members");
var team = require("../model/team");
var signup = require("../model/signup")


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// save signup- Hemanth
router.post('/saveSignup', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide member details" })
  }
  var signupObj = new signup(req.body);
  signupObj.save(function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "Members record saved successfully", data: data })
    }
  });
})

// get signup- Hemanth
router.get('/getSignupList', function (req, res, next) {
  signup.find({}, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "member record fetched successfully", data: results })
    }
  })
});


// save members- Hemanth
router.post('/saveMembers', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide member details" })
  }
  var memberObj = new membere(req.body);
  memberObj.save(function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "Members record saved successfully", data: data })
    }
  });
})

// get member List- Hemanth
router.get('/getMemberList', function (req, res, next) {
  membere.find({}, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "member record fetched successfully", data: results })
    }
  })
});


// save applicant
router.post('/saveApplicant', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide applicant details" })
  }
  var applicantObj = new applicant(req.body);
  applicantObj.save(function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "applicant record saved successfully", data: data })
    }
  });
})

// get applicants List
router.get('/getApplicantsList', function (req, res, next) {
  applicant.find({}, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "applicant record fetched successfully", data: results })
    }
  })
});

//last applicant record
router.get('/getapplicantLast',
  function (req,
    res, next) {
    applicant.find({}, function (err, results) {
      var lastRecord
      // console.log(results.length);
      if (results.length > 0) {
        lastRecord = results[results.length - 1]
      }
      if (err) {
        res.status(403).json({
          msg: "something bad",
          err
        })
      }
      else {
        res.status(200).json({
          msg: "applicant record fetched successfully", data: lastRecord
        })
      }
    })
  });

// save incident - kishan
router.post('/saveIncident', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide incident details" })
  }
  var incidentObj = new incident(req.body);
  incidentObj.save(function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "incident record saved successfully", data: data })
    }
  });
})

// get incident - kishan
router.get('/getIncidentsList', function (req, res, next) {
  incident.find({}, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "Incident record fetched successfully", data: results })
    }
  })
});

// save report

router.post('/saveReport', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide details for report" })
  }
  var reportObj = new report(req.body);
  reportObj.save(function (err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err: err })
    }
    else {
      res.status(200).json({ msg: "Report saved successfully", data: data })
    }
  });
})

// get reports List
router.get('/getReportsList', function (req, res, next) {
  report.find({}, function (err, results) {
    if (err) {
      res.status(403).json({ msg: "something bad", err })
    }
    else {
      res.status(200).json({ msg: "Rports are fetched successfully", data: results })
    }
  })
});

//save team-Sreevani Anoohya Tadiboina
router.post('/saveTeam', function (req, res, next) {
  // Cheks of the request has been made and the request has no body
  if (req && !req.body) {
    // returns a message asking the user to enter the team details
    return res.status(403).json({ msg: "Please provide team details" })
  }
  // Creating an object for the team model
  var teamObj = new team(req.body);
  
  teamObj.save(function (err, data) {
    // Checks for an error 
    if (err) {
      // Displaying an error message 
      res.status(403).json({ msg: "something bad", err: err })
    }
    // if no error message
    else {
      // Saves the data successfully
      res.status(200).json({ msg: "team record saved successfully", data: data })
    }
  });
})
// get team list-Sreevani Anoohya Tadiboina
router.get('/getTeamList', function (req, res, next) {
  team.find({}, function (err, results) {
    // Cheks for an error 
    if (err) {
      // Displays an error message
      res.status(403).json({ msg: "something bad", err })
    }
    // if no error 
    else {
      // fetches the respective requested record successfully
      res.status(200).json({ msg: "team record fetched successfully", data: results })
    }
  })
});


module.exports = router;