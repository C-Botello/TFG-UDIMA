const mongoose = require('mongoose');
const { Schema } = mongoose;

//SCHEMA DE RESPUESTAS
const ReplySchema = new Schema({
  reply: {type: String, required: true},
  user: {type: String},
  userRolName: {type: String},
  userEmail: {type: String},
  idTicket: {type: String},
  date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Reply', ReplySchema);
