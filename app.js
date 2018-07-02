var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
var hbsUtils = require("hbs-utils")(hbs);
let expresssessions = require('express-session'); //añadido
let flash = require('connect-flash'); //añadido
var winston = require("winston");
var Logger = require("./configuration/winston");
var hbsEmail = require("nodemailer-express-handlebars");


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let loginRouter = require('./routes/integration'); //añadido


var app = express();
winston.error("Este es un mensaje de informacion")

//view engine partials
hbsUtils.registerPartials(`${__dirname}/views/partials`);
hbsUtils.registerWatchedPartials(`${__dirname}/views/partials`);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(expresssessions({
  secret: 'GeekshubsAcademy',
  name: 'SesionGeek',
  resave: true,
  saveUninitialized: true
}));


app.use(flash()); //añadido, para que funcione flash y siempre es deadjo de gestion de sesiones

app.use(logger('dev'));
//app.use(logger('combined', {stream: winston.stream}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('./components',express.static(`${__dirname}/public/components`));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use("*",function(req, res, next) {
res.status(404);
res.render('error404');
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
