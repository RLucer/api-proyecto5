const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: String, required: true },
    status: { type: Boolean, required: true },
    stock: { type: String, required: false },
    imagen: { type: String, required: true},
    category: { type: mongoose.ObjectId, ref: 'Category' },

},
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product