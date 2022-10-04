const express = require('express');
const path = require('path');
const upload = require('../middlewares/imageUpload');
const Proci = require('../models/Proci');

const router = express.Router();

router.get('/', (req, res) => {
  res.render(path.join(__dirname, '..', 'views', 'add-item'), {
    title: 'Új proci hozzáadása',
  });
});

router.post('/', upload, async (req, res) => {
  const { email, password } = req.body;
  const image = req.file.filename;
  const ujproci = new Proci({ email, password, image });
  const pro = await ujproci.save();
  console.log(pro);
  res.redirect('/');
});

module.exports = router;
