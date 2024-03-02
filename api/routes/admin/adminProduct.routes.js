const express = require("express");
const router = express.Router();
const authenticate = require("../../middleware/authenticate");
const adminProductController = require("../../Controller/product/product.controller");

router.post("/",authenticate,adminProductController.createProduct);
router.post("/creates",authenticate,adminProductController.createMultipleProduct);
router.delete("/:id",authenticate,adminProductController.deleteProduct);
router.put("/:id",authenticate,adminProductController.updateProduct);

module.exports = router;