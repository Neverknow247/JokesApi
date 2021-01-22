const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "Setup is required!"],
		minlength: [10, "Setup must be at least 10 characters!"]
	},
	punchline: {
		type: String,
		required: [true, "Punchline is required"],
		minlength: [3, "Punchline must be at least 3 characters long"]
	}
})
const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;

// const UserSchema = new mongoose.Schema({
// 	firstName: {
// 		type: String,
// 		required: [true, "First Name is required!"],
// 		minlength: [6, "First Name must be at least 6 characters!"]
// 	},
// 	lastName: {
// 		type: String,
// 		required: [true, "Last Name is required"],
// 		minlength: [6, "Last Name must be at least 6 characters!"]
// 	},
// 	age: {
// 		type: Number,
// 		min: [1, "You must be at least 1 year old to register!"],
// 		max: [150, "You cannot be over 149 years old!"]
// 	},
// 	email: {
// 		type: String,
// 		required: [true, "Email is required!"]
// 	}
// },{timestamps: true});

// const User = mongoose.model("User", UserSchema);

// module.exports = User;