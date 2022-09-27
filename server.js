// NPM modulok importálása
require('dotenv').config();
const express = require('express');
const ejs = require('ejs');

// Core modulok importálása
const path = require('path');

// Saját modulok importálása
const rootRoutes = require('./routes/root');

// Szerver létrehozása
const app = express();
const PORT = process.env.PORT || 3500;

// Publikus (statikus dolgok) mappa beállítása
app.use('/', express.static(path.join(__dirname, 'public')));
// app.use('/', express.static(path.resolve('public')));

// Nézet motor konfigurálása
app.set('view engine', 'ejs');

// Route-olás
app.use('/', rootRoutes);

app.all('*', (req, res) => {
  res.status(404);

  res.render(path.resolve('views', '404'));
});

// Szerver futtatása
app.listen(PORT, () => {
  console.log(`A szerver fut: http://localhost:${PORT}`);
});
