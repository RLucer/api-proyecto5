const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getByIdProducts } = require('../controllers/Product.controller');
const auth = require('../middlewares/auth');

router.post('/', auth, createProduct);
router.get('/',  getAllProducts);
router.get('/id',  getByIdProducts);


module.exports = router