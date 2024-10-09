const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    customer: { type: String, required: true },
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true },
        },
    ],
});

module.exports = mongoose.model('Cart', cartSchema);
