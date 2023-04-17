const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middlewares/errors");

// Multer
app.use("/images/users", express.static("images/users"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Import all routes
const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", auth);
app.use("/api/v1", order);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
