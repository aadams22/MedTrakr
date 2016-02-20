var mongoose  			= require('mongoose'),
		bcrypt          = require('bcrypt-nodejs'),
		Schema					= mongoose.Schema,
		medSchema  			= require('../models/med.js').schema,
		doctorSchema  	= require('../models/doctor.js').schema;


var userSchema = new Schema({

	username: {type: String, required: true},
	password: {type: String, required: true},
	email: {type: String, required: true},
	profile: {
							firstName: {type: String},
							lastName: {type: String},
							dob: {type: Date},

							address: {	
											addrType: {type: String},
											aptNum: {type: Number},
											addr1: {type: String},
											city: {type: String},
											state: {type: String},
											zip: {type: Number}
											},
						doctor: [doctorSchema],
						},


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