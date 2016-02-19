var mongoose 		  = require('mongoose'),
		Schema				= mongoose.Schema,
		addressSchema	  = require('../models/address.js').schema
		doctorSchema  = require('../models/doctor.js').schema;

var pharmSchema = new Schema({
	name: {type: String, required: true},
	
	pharmacyName: {type: String, required: true},
	pharmacyAddr: [addressSchema],
	pharmacyPhone: {type: Number, required: true},
});


var Pharmacy = mongoose.model('Pharmacy', pharmSchema);
module.exports = Pharmacy;


