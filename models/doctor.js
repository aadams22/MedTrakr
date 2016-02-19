var mongoose  			= require('mongoose'),
		Schema					= mongoose.Schema
		addressSchema	  = require('../models/address.js').schema;


var doctorSchema = new Schema({
	firstName: {type: String, require: true},
	lastName: {type: String, require: true},
	email: {type: String, required: true},
	phone: {type: Number, required: true},
	address: [addressSchema],
	hospital: {type: String, required: true},
	hospitAddr: [addressSchema],
});

var Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;