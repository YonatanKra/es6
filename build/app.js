"use strict";
var __moduleName = (void 0);
var point = {
  name: "Some Point",
  shout: function(message, callback) {
    callback(message);
  },
  greeting: function() {
    var $__0 = this;
    this.shout("Hi, I am ", (function(message) {
      return console.log(message + $__0.name);
    }));
  }
};
point.greeting();
