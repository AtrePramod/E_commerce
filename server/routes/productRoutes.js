const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a new product
router.post('/create', async (req, res) => {
    const { name, description, price, stock, category } = req.body;
    const newProduct = new Product({ name, description, price, stock, category });
    try {
        await newProduct.save();
        res.status(201).json({ success: true, message: 'Product created successfully' });
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    }
});

// Get all products
router.get('/all', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    }
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: `Product not found: ${error.message}` });
    }
});

// Update a product
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: `Update failed: ${error.message}` });
    }
});

// Delete a product
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: `Delete failed: ${error.message}` });
    }
});

// Manage stock for a product
router.put('/manage-stock/:id', async (req, res) => {
    const { id } = req.params;
    const { stock } = req.body;
    try {
        const product = await Product.findById(id);
        product.stock = stock;
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ message: `Failed to update stock: ${error.message}` });
    }
});

module.exports = router;
