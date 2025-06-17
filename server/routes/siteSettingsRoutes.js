const express = require('express');
const router = express.Router();
const upload = require("../config/multerConfig");
const controller = require('../controllers/sitesettingsController');

// GET: Récupérer les paramètres du site
router.get('/', controller.getSettings);

// PUT: Mettre à jour les paramètres du site avec upload de logo
router.put('/', upload.single("logo"), controller.updateSettings);

module.exports = router;
