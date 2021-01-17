const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const { isAuth } = require('../helpers/auth');

//OBTENER USUARIO ACTUAL
router.get('/users/user', (req, res) => {
  res.json(req.user);
});

//LOGIN
router.post('/users/login', (req, res, next) => {
  passport.authenticate('local',
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    else if (!user) {
      return res.redirect('/?err');
    }

    else {
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.redirect('/?ok');
      });
    }
  })(req, res, next);
});

//COMPROBAR SI YA EXISTE UN USUARIO
router.post('/users/findUser', async (req, res) => {
  const { email } = req.body;
  const emailUser = await User.findOne({ email: email });
  if (emailUser) {
    res.json(true);
  } else {
    res.json(false);
  }
});

//REGISTRO
router.post('/users/register', async (req, res) => {
  const { name, email, rol, password, conf_password } = req.body;

  const emailUser = await User.findOne({ email: email });

  //Creacion de usuario
  const newUser = new User({ name, email, password, rol });

  //encriptado de la contrase�a
  newUser.password = await newUser.encryptPass(password);

  //Almacenamiento del usuario
  await newUser.save();
});

//PERFIL
router.get('/profile', isAuth, async (req, res) => {
  res.render('profile');
});

//LOGOUT
router.get('/users/logout', (req, res) => {
  req.logout();
  res.redirect('/?logout');
});

//EDITAR CUENTA DE USUARIO
router.put('/users/edit/:id', async (req, res) => {
  const { name, email, rol } = req.body;

  if (name) {
    await Ticket.findByIdAndUpdate(req.params.id, {name});
    return res.json(true);
  } else if (email) {
    await Ticket.findByIdAndUpdate(req.params.id, {email});
    return res.json(true);
  } else if (rol) {
    await Ticket.findByIdAndUpdate(req.params.id, {rol});
    return res.json(true);
  } else {
    return res.json(false);
  }
});

//ELIMINAR UNA CUENTA DE USUARIO
router.delete('/users/delete/:id', isAuth, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
});

module.exports = router;
