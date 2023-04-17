const Product = require("../models/productModel");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

const products = require("../data/products.json");

// setting dotenv file
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products telah di hapus");

    await Product.insertMany(products);
    console.log("Semua Products telah ditambah");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
