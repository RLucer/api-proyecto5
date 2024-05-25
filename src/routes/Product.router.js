const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts } = require('../controllers/Product.controller');
const auth = require('../middlewares/auth');

router.post('/', auth, createProduct);
router.get('/',  getAllProducts);

module.exports = router