const Product = require('../models/Product');
const cloudinary = require('../config/cloudinary');

// Read all products
const getProducts = async (_req, res) => {
    try {
        const products = await Product.find();
        const productsWithImages = await Promise.all(
            products.map(async (product) => {
                product = product.toObject();
                if (product.image && product.image.public_id) {
                    product.imageUrl = cloudinary.url(product.image.public_id);
                }
                return product;
            })
        );
        res.json(productsWithImages);
    } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Create a new product with image upload to Cloudinary
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, image, tags } = req.body;

    if (!image || !name || !description || !price || !category) {
      return res.status(400).json({ message: "Champs requis manquants." });
    }

    // Upload image (base64) vers Cloudinary
    const uploadedResponse = await cloudinary.uploader.upload(image, {
      folder: "products",
    });

    // Gérer les tags
    const parsedTags = Array.isArray(tags)
      ? tags
      : JSON.parse(tags || "[]");

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      tags: parsedTags,
      image: {
        public_id: uploadedResponse.public_id,
        url: uploadedResponse.secure_url,
      },
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Erreur lors de la création du produit :", error);
    res.status(500).json({ message: "Erreur serveur lors de la création du produit." });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product?.image?.public_id) {
            // Supprimer aussi l'image sur Cloudinary
            await cloudinary.uploader.destroy(product.image.public_id);
        }

        await Product.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Produit supprimé' });
    } catch (error) {
        console.error('Erreur lors de la suppression du produit :', error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
};

// Update a product (optionnel : gérer la mise à jour de l'image aussi)
const updateProduct = async (req, res) => {
    try {
        const updateData = req.body;

        // Si une nouvelle image est fournie
        if (updateData.image) {
            const product = await Product.findById(req.params.id);
            if (product?.image?.public_id) {
                await cloudinary.uploader.destroy(product.image.public_id);
            }

            const uploadResult = await cloudinary.uploader.upload(updateData.image, {
                folder: 'products',
            });

            updateData.image = {
                public_id: uploadResult.public_id,
                url: uploadResult.secure_url,
            };
        }

        if (updateData.tags && typeof updateData.tags === 'string') {
            updateData.tags = JSON.parse(updateData.tags);
        }

        const updated = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.json(updated);
    } catch (error) {
        console.error('Erreur lors de la mise à jour du produit :', error);
        res.status(500).json({ message: 'Erreur serveur' });
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

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct,
};
