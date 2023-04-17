const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose
      .connect(process.env.DB_LOCAL_URI)
      .then((con) =>
        console.log(`MongoDB Connected with HOST: ${con.connection.host}`)
      );
  } catch (error) {
    console.log(`MongoDB connection error: ${error.message}`);
    console.log("Shutting down the server due to MongoDB connection error");
    process.exit(1);
  }
};

module.exports = connectDatabase;
