"use strict";
var __moduleName = (void 0);
var point = {
  name: "Some Point",
  shout: function() {
    var message = arguments[$traceurRuntime.toProperty(0)] !== (void 0) ? arguments[$traceurRuntime.toProperty(0)] : "Hello, I am " + this.name;
    var callback = arguments[$traceurRuntime.toProperty(1)] !== (void 0) ? arguments[$traceurRuntime.toProperty(1)] : (function(message) {
      return console.log(message);
    });
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
point.shout();
