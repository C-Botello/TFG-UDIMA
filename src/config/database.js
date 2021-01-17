const mongoose = require('mongoose');

//CONEXIÓN BASE DE DATOS
mongoose.connect('mongodb://192.168.1.5/HelpDeskApp', {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(db => console.log('Conectado a MongoDB'.blue))
  .catch(err => console.error(err));
