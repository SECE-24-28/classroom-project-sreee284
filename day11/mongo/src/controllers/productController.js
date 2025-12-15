const { products } = require("../models/productModel");

// READ ALL
exports.getAllProducts = (req, res) => {
  res.json(products);
};
//create product
exports.createProduct = (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
}