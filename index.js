const express = require("express");
const cors = require("cors");
const app = express();

const authRoutes = require("./api/routes/auth/auth.routes");
const userRoutes = require("./api/routes/user/user.routes");
const productRoutes = require("./api/routes/product/product.routes");
const adminProductRoutes = require("./api/routes/admin/adminProduct.routes");
const cartRoutes = require("./api/routes/cart/cart.routes");
const cartItemRoutes = require("./api/routes/cart/cartItem.routes");
const orderRoutes = require("./api/routes/order/order.routes");
const adminOrderRoutes = require("./api/routes/admin/admin.routes")

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin/products",adminProductRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/cart_items",cartItemRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/admin/orders",adminOrderRoutes)

module.exports = app;
