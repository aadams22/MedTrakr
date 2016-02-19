var mongoose  			= require('mongoose'),
		Schema					= mongoose.Schema,
		medSchema  			= require('../models/med.js').schema,
		doctorSchema  	= require('../models/doctor.js').schema,
		addressSchema	  = require('../models/address.js').schema;


var userSchema = new Schema({
	firstName: {type: String, require: true},
	lastName: {type: String, require: true},
	password: {type: String, required: true},
	email: {type: String, required: true},
	dob: {type: Date, required: true},
	address: [addressSchema],
	doctor: [doctorSchema],
	medications: [medSchema]
});

var User = mongoose.model('User', userSchema);
module.exports = User;