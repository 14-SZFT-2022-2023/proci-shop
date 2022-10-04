const mongoose = require('mongoose');

function adatbazisCsatlakozas() {
  mongoose.connect(process.env.DB_URI, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('Sikeres csatlakozás az adatbázishoz!');
    }
  });
}

module.exports = adatbazisCsatlakozas;
