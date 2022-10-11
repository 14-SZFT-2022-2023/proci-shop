const express = require('express');
const router = express.Router();
const Proci = require('../models/Proci');
const fs = require('fs');
const { log } = require('console');

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const user = await Proci.findById(id);
  res.render('edit-item', { title: 'Egy elem', user: user });
});

router.post('/:id', async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params.id;
    await Proci.findByIdAndUpdate(id, {
      email: req.body.email,
      password: req.body.password,
    });
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
