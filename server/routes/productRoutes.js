const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Assure-toi que ce dossier existe physiquement
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // Nom unique
  },
});

const upload = multer({ storage });

// ✅ Routes
router.post("/", upload.single("image"), productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
