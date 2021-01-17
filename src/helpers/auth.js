const express = require('express');
const helpers = {};

//AUTORIZACIÓN
helpers.isAuth = (req, res, next) => {
  if(req.isAuthenticated()){
    return next();
  } else{
    res.redirect('/?auth');
  }
};

module.exports = helpers;
