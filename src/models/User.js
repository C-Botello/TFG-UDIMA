const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcryptjs = require('bcryptjs');

//SCHEMA DE USUARIOS
const UserSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  rol: {type: String, required: true, default: "Usuario"},
  date: {type: Date, default: Date.now}
})

//Encriptado de contraseña
UserSchema.methods.encryptPass = async (password) => {
  const salt = await bcryptjs.genSalt(10);
  const hash = bcryptjs.hash(password, salt);
  return hash;
};

//Comparación de contraseña
UserSchema.methods.matchPass = async function (password) {
  return await bcryptjs.compare(password, this.password)
};

module.exports = mongoose.model('User', UserSchema);
