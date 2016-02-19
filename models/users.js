var mongoose  			= require('mongoose'),
		bcrypt          = require('bcrypt-nodejs'),
		Schema					= mongoose.Schema,
		medSchema  			= require('../models/med.js').schema,
		doctorSchema  	= require('../models/doctor.js').schema,
		addressSchema	  = require('../models/address.js').schema;


var userSchema = new Schema({
	firstName: {type: String},
	lastName: {type: String},
	username: {type: String, required: true},
	password: {type: String, required: true},
	email: {type: String, required: true},
	dob: {type: Date},
	// address: [addressSchema],
	// doctor: [doctorSchema],
	meds: [medSchema]
});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('User', userSchema);
module.exports = User;