var point = {
	name: "Some Point",
	
	shout: function(message = "Hello, I am " + this.name, callback = message => console.log(message)){
		callback(message);
	},
	greeting: function(){
		this.shout("Hi, I am ", message => console.log(message + this.name));
	}
}

point.greeting();
point.shout();