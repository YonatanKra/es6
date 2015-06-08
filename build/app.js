"use strict";
var __moduleName = (void 0);
var point = {
  name: "Some Point",
  color: "blue",
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
console.group("Just the name");
var name = point.name;
console.log(name);
console.groupEnd();
console.group("Name and color");
var $__1 = point,
    name = $__1.name,
    color = $__1.color;
console.log(name);
console.log(color);
console.groupEnd();
console.group("Name and color different aliases");
var $__1 = point,
    pointName = $__1.name,
    pointColor = $__1.color;
console.log(pointName);
console.log(pointColor);
console.groupEnd();
console.group("Pick certain elements from array");
var myArray = [];
{
  try {
    throw undefined;
  } catch ($i) {
    $i = 1;
    for (; $i <= 10; $i++) {
      try {
        throw undefined;
      } catch (i) {
        i = $i;
        try {
          myArray.push(i);
        } finally {
          $i = i;
        }
      }
    }
  }
}
var $__1 = myArray,
    firstItem = $__1[$traceurRuntime.toProperty(0)],
    sixthItem = $__1[$traceurRuntime.toProperty(5)];
console.log(firstItem);
console.log(sixthItem);
console.groupEnd();
console.group("Pick certain elements from array and destructure their personal stuff");
myArray = [];
{
  try {
    throw undefined;
  } catch ($i) {
    $i = 1;
    for (; $i <= 10; $i++) {
      try {
        throw undefined;
      } catch (i) {
        i = $i;
        try {
          myArray.push({
            id: i,
            myStuff: _.uniqueId('Item ' + i.toString())
          });
        } finally {
          $i = i;
        }
      }
    }
  }
}
var $__1 = myArray,
    firstItem = $__1[$traceurRuntime.toProperty(0)],
    sixthItem = $__1[$traceurRuntime.toProperty(5)];
function getMyStuff($__1) {
  var myStuff = $__1.myStuff;
  console.log(myStuff);
}
getMyStuff(firstItem);
getMyStuff(sixthItem);
console.groupEnd();
