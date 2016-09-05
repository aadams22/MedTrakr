var mongoose      = require('mongoose'),
    Schema        = mongoose.Schema,
    pharmSchema   = require('../models/pharmacy.js').schema,
    doctorSchema  = require('../models/doctor.js').schema;

var medSchema = new Schema({
  name: {type: String},
  rx: {type: Number},
  dosage: {type: Number},
  directions: {type: String},
  // pharmacy: [pharmSchema],
  // prescriber: [doctorSchema],
  refills: {type: Number},
  taken: {type: Boolean},
  created_at: {type: Date, default: Date.now},
  frequency: {type: Number},
  pillNum: {type: Number}
});




var Med = mongoose.model('Med', medSchema);
module.exports = Med;