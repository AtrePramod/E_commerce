const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

// Create a new order
router.post('/create', async (req, res) => {
    const { products, customer, totalAmount } = req.body;
    const newOrder = new Order({ products, customer, totalAmount });
    try {
        await newOrder.save();
        res.status(201).json({ success: true, message: 'Order placed successfully' });
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    }
});

// Get all orders
router.get('/all', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ message: `Error: ${error.message}` });
    }
});

// Get a single order by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(404).json({ message: `Order not found: ${error.message}` });
    }
});

// Update order status
router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({ message: `Update failed: ${error.message}` });
    }
});

// Delete an order
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Order.findByIdAndDelete(id);
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: `Delete failed: ${error.message}` });
    }
});

module.exports = router;
