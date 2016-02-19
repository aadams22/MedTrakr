var mongoose 		  = require('mongoose'),
		Schema				= mongoose.Schema,
		addressSchema	= require('../models/address.js').schema,
		pharmSchema	  = require('../models/pharmacy.js').schema,
		doctorSchema  = require('../models/doctor.js').schema;

var medSchema = new Schema({
	name: {type: String, required: true},
	rx: {type: Number, required: true},
	dosage: {type: Number, required: true},
	directions: {type: String, required: true},
	// pharmacy: [pharmSchema],
	// prescriber: [doctorSchema],
	refills: {type: Number, required: true},
	taken: {type: Boolean},
	created_at: {type: Date, default: Date.now}

});




var Med = mongoose.model('Med', medSchema);
module.exports = Med;