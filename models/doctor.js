var mongoose  			= require('mongoose'),
		Schema					= mongoose.Schema;


var doctorSchema = new Schema({
	type: {type: String },
	firstName: {type: String},
	lastName: {type: String},
	email: {type: String},
	phone: {type: Number},
	// address: [	
	// 					addrType: {type: String},
	// 					addr1: {type: String, required: true},
	// 					city: {type: String, required: true},
	// 					state: {type: String, required: true},
	// 					zip: {type: Number, required: true}
	// 					],
	// hospital: {type: String, required: true},
	// hospitAddr: [addressSchema],
});

var Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;