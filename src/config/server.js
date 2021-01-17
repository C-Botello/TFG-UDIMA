const express = require('express');
const colors = require('colors');
const path = require('path');
const hbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const http = require('http');
const socketio = require('socket.io');

//INICIALIZACIÓN
const exp = express();
require('./database');
require('./passport');
const server = http.createServer(exp);
const io = socketio(server);

//SETTINGS
exp.set('port', 8181);
exp.set('views', path.join(__dirname, '../views'));
exp.use(express.static(path.join(__dirname, '../public')));
exp.engine('hbs', hbs({
  defaultLayout: 'main',
  layoutsDir: path.join(exp.get('views'), 'layouts'),
  partialsDir: path.join(exp.get('views'), 'components/partials'),
  extname: '.hbs',
  helpers: require('../helpers/hbs-helpers')
}));
exp.set('view engine', 'hbs');

//MIDDLEWARES
exp.use(express.json());
exp.use(express.urlencoded({extended: false}));
exp.use(session({
  secret: 'secreto',
  resave: true,
  saveUninitialized: true
}));
exp.use(passport.initialize());
exp.use(passport.session());

//VARIABLES GLOBALES
exp.use((req, res, next) => {
  res.locals.specialities = require('./specialities');
  if(typeof req.user === 'undefined'){
    res.locals.userName = null;
    res.locals.userRol = null;
  } else{
    res.locals.userName = req.user.name;
    res.locals.userRol = req.user.rol;
  }
  next();
});

module.exports.exp = exp;
module.exports.server = server;
module.exports.io = io;
