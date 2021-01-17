const router = require('express').Router();
const Ticket = require('../models/Ticket');
const Reply = require('../models/Reply');
const User = require('../models/User');
const { isAuth } = require('../helpers/auth');

//RENDERIZAR VISTA DE TICKETS
router.get('/', isAuth, (req, res) => {
  res.render('tickets');
});

//CREAR NUEVO TICKET
router.post('/ticket', isAuth, async (req, res) => {
  const { issue, speciality, description } = req.body;
  const newTicket = new Ticket({ issue, speciality, description });

  newTicket.user = req.user.name;
  newTicket.idUser = req.user.id;

  await newTicket.save();
});

//OBTENER TICKETS
router.get('/ticket', isAuth, async (req, res) => {
  const tickets = await Ticket.find().lean().sort({date: 'desc'});

  res.json(tickets);
});

//OBTENER UN TICKET CONCRETO
router.get('/ticket/:id', isAuth, async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);

  res.json(ticket);
});

//CERRAR/ABRIR UN TICKET
router.put('/ticket/:id', isAuth, async (req, res) => {
  const ticket = await Ticket.findById(req.params.id);
  const status = !ticket.status;

  await Ticket.findByIdAndUpdate(req.params.id, {status});
  res.json(status);
});

//OBTENER RESPUESTAS DE UN TICKET CONCRETO
router.get('/replies/:id', isAuth, async (req, res) => {
  const replies = await Reply.find({idTicket: req.params.id}).lean().sort({date: 1});

  res.json(replies);
});

//RESPONDER EN UN TICKET
router.post('/replies/:id', isAuth, async (req, res) => {
  const {reply}  = req.body;
  const id = req.params.id;
  const ticket = await Ticket.findById(req.params.id).lean();

  //creacion y almacenamiento
  const newReply = new Reply({ reply });

  newReply.user = req.user.name;
  newReply.userRolName = req.user.rol;
  newReply.userEmail = req.user.email;
  newReply.idTicket = req.params.id;

  await newReply.save();

module.exports = router;
