const mongoose = require('mongoose');
const { Schema } = mongoose;

//SCHEMA DE ENFERMEDADES
const LinkSchema = new Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  href: {type: String, required: true}
})

module.exports = mongoose.model('Link', LinkSchema);
