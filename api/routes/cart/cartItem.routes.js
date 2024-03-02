const express = require("express");
const router = express.Router();
const cartItemController = require("../../Controller/cart/cartItem.controller")
const authenticate = require("../../middleware/authenticate")

router.put("/:id",authenticate,cartItemController.updateCartItem);
router.get("/:id",authenticate,cartItemController.removeCartItem);

module.exports = router;