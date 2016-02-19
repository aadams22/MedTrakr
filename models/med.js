var mongoose 		  = require('mongoose'),
		Schema				= mongoose.Schema,
		addressSchema	= require('../models/address.js').schema,
		pharmSchema	  = require('../models/pharmacy.js').schema,
		doctorSchema  = require('../models/doctor.js').schema;

var medSchema = new Schema({
	name: {type: String, required: true},

	dosage: {type: Number, required: true},
	pharmacy: [pharmSchema],
	prescriber: [doctorSchema]

});


var Med = mongoose.model('Med', medSchema);
module.exports = Med;