const express = require("express");
const cors = require("cors");
const app = express();

const authRouters = require("./api/routes/auth/auth.routes");
const userRouters = require("./api/routes/user/user.routes");

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouters);
app.use("/api/users", userRouters);

module.exports = app;
