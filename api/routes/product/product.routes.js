const express = require("express");
const router = express.Router();
const productController = require("../../Controller/product/product.controller");
const authenticate = require("../../middleware/authenticate");

router.post("/", authenticate, productController.createProduct);
router.post("/id/:id", authenticate, productController.findProductById);
router.get("/products", productController.getAllProducts);

module.exports = router;
