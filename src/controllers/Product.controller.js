const Product = require('../models/Product.model');


const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const response = await product.save();

    if (response) {
      return res.json({
        message: "Product was created successfully",
        detail: response,
      });
    }
  } catch (error) {
    return res.json({
      message: "Error",
      detail: error.message,
    });
  }
};


const getAllProducts = async (req, res) => {
  try {
    const response = await Product.find().populate("category")
    
    if (response) {
      return res.json({
        message: "Products list",
        detail: response,
      });
    }
  } catch (error) {
    return res.json({
      message: "Error",
      detail: error.message,
    });
  }
};

const getByIdProducts = async (req, res) => {
  try {
    const { id } = req.body;

    const response = await Product.find({id})
   
    if (response) {
      return res.json({
        message: "Products by id",
        detail: response,
      });
    }
  } catch (error) {
    return res.json({
      data: {id},
      message: "Error no encontro id producto",
      detail: error.message,
    });
  }
};




module.exports = {
  createProduct,
  getAllProducts,
  getByIdProducts,
};
