var express = require('express');
var path = require('path');
var logger = require('morgan');
var methodoverride = require('method-override');
var bodyParser = require('body-parser');
var db = require('./db');

var UserController = require('./controllers/UserController');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views')); // folder for view engine files
app.set('view engine', 'hbs'); // we use the engine pug, mustache or EJS work great too

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodoverride('_method'));
app.use('/users', UserController);

module.exports = app;
