const moment = require('moment');

//HELPERS HANDLEBARS
module.exports = {
  formatDate: function(date, format) {
    var momentDate = moment(date);
    return momentDate.format(format);
  },
  equal: function(a, b, good, bad) {
    if (a == b) {
      return good;
    } else {
      return bad;
    }
  },
  concat: function(a, b) {
    return a + b;
  },
  boolean: function(a) {
    if (a == 0){
      return false
    } else {
      return true
    }
  },
  and: function(a, b) {
    if(a && b) {
      return true;
    } else {
      return false;
    }
  }
}
