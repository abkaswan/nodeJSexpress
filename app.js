var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');//for handling cookie
var logger = require('morgan');//module for logging out the info in terminal

var indexRouter = require('./routes/index');
var about = require('./routes/about');



var app = express();
//any time you want anything across your files just use locals.
app.locals.points='8,783';
//app.locals.videodata=require('./videodata');
// ==>uncomment above line if you want this json functionality for your entire project


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setting up how data is logged and parsed
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', about);


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
//development error handling->at the time of development
//and production error handling->at time of when website is live