const mongoose = require('mongoose');
const { Schema } = mongoose;

//SCHEMA DE TICKETS
const TicketSchema = new Schema({
  status: {type: Number, default: 1},
  issue: {type: String, required: true},
  speciality: {type: String, required: true},
  description: {type: String, required: true},
  user: {type: String},
  idUser: {type: String},
  numReplies: {type: Number, default: 0},
  date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Ticket', TicketSchema);
