//importation du modele
const SiteSettings = require('../models/SiteSettings');

//Obtenir les parametres du site
const getSettings = async (req, res) => {
    try {
        const settings = await SiteSettings.findOne();
        if (!settings) 
            return res.status(404).json({ message: 'Paramètres du site non trouvés' });
        res.json(settings);
    } catch (error) {
        console.error('Erreur lors de la récupération des paramètres du site:', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
}


// Mettre à jour les paramètres du site
const updateSettings = async (req, res) => {
  try {
    const { name, phoneNumber, email, address } = req.body;

    if (!name || !phoneNumber || !email || !address) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    let logoData = undefined;

    // Si un fichier est envoyé (input[name="logo"])
    if (req.file) {
      logoData = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    }

    const settings = await SiteSettings.findOneAndUpdate(
      {},
      {
        ...(logoData && { logo: logoData }),
        name,
        phoneNumber,
        email,
        address,
      },
      { new: true, upsert: true }
    );

    res.json(settings);
  } catch (error) {
    console.error("Erreur lors de la mise à jour des paramètres du site:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};


// Exporter les fonctions du contrôleur
module.exports = {
    getSettings,
    updateSettings
};