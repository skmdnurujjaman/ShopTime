/** @format */

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Mongo database connected on ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log("Db Connection failed!");
  }
};

module.exports = connectDB;
