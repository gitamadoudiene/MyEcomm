const Product = require('../models/Product');

//Read all products
const getProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products); 
    } catch (error) {
        console.error('Error lors de la recuperation des produits:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Create a new product
const createProduct = async (req, res) => {
    try{
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    }catch (error) {
        console.error('Error lors de la creation du produit:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

//Delete a product
const deleteProduct = async (req, res) => {
   try{
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Product deleted successfully' });
   }catch (error) {
        console.error('Error lors de la suppression du produit:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try{
        const update = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Return the updated document
        );
        res.json(update);
    } catch (error) {
        console.error('Error lors de la mise a jour du produit:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a single product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Produit non trouvé' });
        }
        res.json(product);
    } catch (error) {
        console.error('Erreur lors de la récupération du produit par ID :', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Exporting the functions to be used in the routes
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct
};

