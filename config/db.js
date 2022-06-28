/** @format */

const mongoose = require("mongoose");
const URI = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.drgg7.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(
      `Mongo database connected on ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log("Db Connection failed!");
  }
};

module.exports = connectDB;
