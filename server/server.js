// importation des modules nécessaires
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

// Load environment variables from .env file
dotenv.config();
//Appel de la fonction connectDB pour établir la connexion à la base de données
connectDB();

// Création de l'application Express
const app = express();

app.use(cors()); // Middleware pour autoriser les requêtes CORS
app.use(express.json()); // Middleware pour parser le JSON dans les requêtes

// Appelle des routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});