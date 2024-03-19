const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticate");
const adminProductController = require("../../Controller/product/product.controller");

router.post("/",authenticate,adminProductController.createProduct);
router.post("/creates",authenticate,adminProductController.createMultipleProduct);
router.delete("/deleteProduct/:id",authenticate,adminProductController.deleteProduct);
router.put("/update/:id",authenticate,adminProductController.updateProduct);

module.exports = router;