var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
require("./config/database");
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views/dist/drs'));
app.engine("html", require("ejs").renderFile);
app.set('view engine', 'html');

//enabling express session
app.use(session({resave: true, saveUninitialized: true,secret: 'drrs'}));

// cors
app.use( cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views/dist/drs')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
