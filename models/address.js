var mongoose 		  = require('mongoose'),
		Schema				= mongoose.Schema;

var addressSchema = new Schema({
	addrName: {type: String, required: true},
	addr1: {type: String, required: true},
	city: {type: String, required: true},
	state: {type: String, required: true},
	zip: {type: Number, required: true}
	
});


var Address = mongoose.model('Address', addressSchema);
module.exports = Address;