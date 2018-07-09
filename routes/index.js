var express = require('express');
var router = express.Router();
var applicant = require("../model/applicant");
var incident = require("../model/incident");
var membere = require("../model/members");
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

module.exports = router;