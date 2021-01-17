const passport = require('passport');
const strategy = require('passport-local').Strategy;
const User = require('../models/User');

//AUTENTICACIÓN
passport.use(new strategy({
  usernameField: 'email'
}, async (email, password, done) => {
  const user = await User.findOne({ email: email });
  if(!user){
    return done(null, false, { message: 'Usuario no encontrado'});
  } else {
    const match = await user.matchPass(password);
    if(match){
      return done (null, user);
    } else {
      return done (null, false, { message: 'Contrase\u00F1a Incorrecta' });
    }
  }
}));

//SERIALIZAR USUARIO
passport.serializeUser((user, done) => {
  done (null, user.id);
});

//DESERIALIZAR USUARIO
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
  done (err, user);
  });
});
