var mongoose 		  = require('mongoose'),
		Schema				= mongoose.Schema,
		doctorSchema  = require('../models/doctor.js').schema;

var pharmSchema = new Schema({
	name: {type: String, required: true},
	pharmacyName: {type: String, required: true},
	// pharmacyAddr: [	
	// 							addrType: {type: String, required: true},
	// 							addr1: {type: String, required: true},
	// 							city: {type: String, required: true},
	// 							state: {type: String, required: true},
	// 							zip: {type: Number, required: true}
	// 							],
	pharmacyPhone: {type: Number, required: true},
});


var Pharmacy = mongoose.model('Pharmacy', pharmSchema);
module.exports = Pharmacy;


