const mongoose = require('mongoose');

//CONEXIÓN BASE DE DATOS
const URL = 'mongodb://192.168.0.115/HelpDeskApp';
mongoose.connect(URL, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(db => console.log('Conectado a MongoDB'.blue))
  .catch(err => console.error(err));
