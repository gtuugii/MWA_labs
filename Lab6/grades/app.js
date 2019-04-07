var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const urlencodedParser = express.urlencoded({ extended: false });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gradesRouter = require('./routes/grades');

var app = express();

let port = 8888;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', process.env.PORT || port);
app.set('etag', true);
app.disable("x-powered-by");
app.set('env', 'development');
app.set('trust proxy', true);
app.enable('case sensitive routing');
app.enable("strict routing");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grades', gradesRouter);

//app.use(jsonParser);
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

port = app.get('port');
app.listen(port, () => { console.log(`Listening on port: ${port}`)});

module.exports = app;
