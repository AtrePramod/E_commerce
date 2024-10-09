const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Add product to cart
router.post('/add', async (req, res) => {
    const { customer, products } = req.body;
    const newCart = new Cart({ customer, products });
    try {
        await newCart.save();
        res.status(201).json({ success: true, message: 'Product added to cart successfully' });
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    }
});

// Get cart for a customer
router.get('/:customer', async (req, res) => {
    const { customer } = req.params;
    try {
        const cart = await Cart.findOne({ customer });
        res.status(200).json(cart);
    } catch (error) {
        res.status(404).json({ message: `Cart not found: ${error.message}` });
    }
});

// Update cart items
router.put('/update/:customer', async (req, res) => {
    const { customer } = req.params;
    try {
        const updatedCart = await Cart.findOneAndUpdate({ customer }, req.body, { new: true });
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(400).json({ message: `Update failed: ${error.message}` });
    }
});

// Delete a cart
router.delete('/delete/:customer', async (req, res) => {
    const { customer } = req.params;
    try {
        await Cart.findOneAndDelete({ customer });
        res.status(200).json({ message: 'Cart deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: `Delete failed: ${error.message}` });
    }
});

module.exports = router;
