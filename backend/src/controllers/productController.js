// controllers/productController.js
const Product = require('../models/Product');

// Create a new product (vehicle)
const createProduct = async (req, res) => {
  const { name, price, seats, fuel, imageUrl } = req.body;
  console.log("api called");
  

  try {
    const newProduct = new Product({ name, price, seats, fuel, imageUrl });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};

// Get all products (vehicles)
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
};

// Update a product (vehicle) by ID
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, seats, fuel, imageUrl } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { name, price, seats, fuel, imageUrl },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};

module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };