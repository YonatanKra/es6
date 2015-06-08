var point = {
	name: "Some Point",
	color: "blue",
	
	shout: function(message = "Hello, I am " + this.name, callback = message => console.log(message)){
		callback(message);
	},
	greeting: function(){
		this.shout("Hi, I am ", message => console.log(message + this.name));
	}
}

console.group("Just the name");
let {name} = point;
console.log(name);
console.groupEnd();

console.group("Name and color");
let {name, color} = point;
console.log(name);
console.log(color);
console.groupEnd();

console.group("Name and color different aliases");
let {name:pointName, color:pointColor} = point;
console.log(pointName);
console.log(pointColor);
console.groupEnd();

console.group("Pick certain elements from array");
var myArray = [];
for (let i=1; i<=10; i++){
	myArray.push(i);
}
let [firstItem,,,,,sixthItem] = myArray;
console.log(firstItem);
console.log(sixthItem);
console.groupEnd();

console.group("Pick certain elements from array and destructure their personal stuff");
myArray = [];
for (let i=1; i<=10; i++){
	myArray.push({
		id: i,
		myStuff: _.uniqueId('Item ' + i.toString())
	});
}
let [firstItem,,,,,sixthItem] = myArray;
function getMyStuff({myStuff}){
	console.log(myStuff);
}
getMyStuff(firstItem);
getMyStuff(sixthItem);
console.groupEnd();
