const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

// Les routes vers les fonctions du contrôleur
router.get('/', productController.getProducts); // ✅ OK
router.get('/:id', productController.getProductById); // ✅ Si tu l’as ajoutée
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
