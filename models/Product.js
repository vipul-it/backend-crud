// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'product Name is required'],
  },
  category: {
    type: String,
    required: [true, 'category is required'],
  },
  brand: {
    type: String,
    required: [true, 'brand is required'],
  },
  description: {
    type: String,
    required: [true, 'description is required'],
  },
  price: {
    type: Number,
    min: 0,
    required: [true, 'price is required'],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
