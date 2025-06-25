const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: {
    public_id: { type: String, required: true },
    url: { type: String }, // optionnel
  },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
});

module.exports = mongoose.model("Product", productSchema);
