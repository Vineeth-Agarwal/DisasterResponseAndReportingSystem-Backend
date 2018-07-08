var express = require('express');
var router = express.Router();
var applicant = require("../model/applicant")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// save applicant
router.post('/saveApplicant', function (req, res, next) {
  if (req && !req.body) {
    return res.status(403).json({ msg: "Please provide applicant details" })
  }
  var applicantObj = new applicant(req.body);
  applicantObj.save(function(err, data) {
    if (err) {
      res.status(403).json({ msg: "something bad", err : err })
    }
    else {
      res.status(200).json({ msg: "applicant record saved successfully", data : data})
    }
  });
})
// get applicants List
router.get('/getApplicantsList', function (req, res, next) {
applicant.find({},function(err,results){
  if (err) {
    res.status(403).json({ msg: "something bad", err })
  }
  else {
    res.status(200).json({ msg: "applicant record fetched successfully",data:results })
  }
})
});

//last applicant record
router.get('/getapplicantLast',
function (req,
res, next) {
applicant.find({},function(err,results){
var lastRecord
// console.log(results.length);
if(results.length>0)
{
lastRecord=results[results.length-1]
}
if (err) {
res.status(403).json({
msg: "something bad",
err })
}
else {
res.status(200).json({
msg: "applicant record fetched successfully",data:lastRecord })
}
})
});

module.exports = router;
