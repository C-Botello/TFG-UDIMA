const router = require('express').Router();
const Disease = require('../models/Disease');
const Faq = require('../models/Faq');
const Link = require('../models/Link');

router.get('/', (req, res) => {
  res.render('means');
});

//OBTENER TICKETS
router.get('/diseases', async (req, res) => {
  const diseases = await Disease.find().lean();
  res.json(diseases);
});

router.get('/faqs', async (req, res) => {
  const faqs = await Faq.find().lean();
  res.json(faqs);
});

router.get('/links', async (req, res) => {
  const links = await Link.find().lean();
  res.json(links);
});

module.exports = router;
