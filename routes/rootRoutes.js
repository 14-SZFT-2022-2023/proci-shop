const express = require('express');
const path = require('path');
const Proci = require('../models/Proci');

const router = express.Router();

router.get('^/$|/index(.html)?', async (req, res) => {
  const adatok = await Proci.find();
  res.render(path.join(__dirname, '..', 'views', 'index'), {
    title: 'Proci webshop',
    adatok,
  });
});

module.exports = router;
