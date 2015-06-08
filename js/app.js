var point = {
	name: "Some Point",
	
	shout: function(message, callback){
		callback(message);
	},
	greeting: function(){
		this.shout("Hi, I am ", message => console.log(message + this.name));
	}
}

point.greeting();