const mongoose = require('mongoose');
const { Schema } = mongoose;

//SCHEMA DE ENFERMEDADES
const DiseaseSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  symptoms: [Array]
})

module.exports = mongoose.model('Disease', DiseaseSchema);
