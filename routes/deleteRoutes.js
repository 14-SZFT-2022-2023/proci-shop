const express = require('express');
const router = express.Router();
const Proci = require('../models/Proci');
const fs = require('fs');

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const proci = await Proci.findById(id);
    fs.unlinkSync(`public/images/${proci.image}`);
    await Proci.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
