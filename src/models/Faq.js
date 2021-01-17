const mongoose = require('mongoose');
const { Schema } = mongoose;

//SCHEMA DE ENFERMEDADES
const FaqSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true}
})

module.exports = mongoose.model('Faq', FaqSchema);
