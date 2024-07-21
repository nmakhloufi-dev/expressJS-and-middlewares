//BOOKS-SHOP/routes/app.js

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express(); // Création de l'instance de l'application Express
const port = 3000;

// Définir le dossier statique pour les fichiers CSS
app.use(express.static(path.join(__dirname, 'public')));

// Configuration de la base de données
mongoose.connect('mongodb://localhost:27017/books-shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware pour parser les requêtes
app.use(bodyParser.urlencoded({ extended: false }));

// Configuration des sessions
app.use(session({
    secret: 'votreSecret',
    resave: false,
    saveUninitialized: true,
}));

// Définir le dossier des vues et le moteur de rendu
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes de base
const indexRoutes = require('./routes/index');
const shopRoutes = require('./routes/shop');
app.use('/', indexRoutes);
app.use('/shop', shopRoutes);

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
