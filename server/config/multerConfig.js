const multer = require("multer");

const storage = multer.memoryStorage(); // Tu peux aussi utiliser diskStorage si tu veux sauvegarder sur le disque

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
});

module.exports = upload;
