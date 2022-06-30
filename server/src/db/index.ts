import mongoose from "mongoose";

const conn = mongoose.connect("mongodb://" + process.env.DB_HOST, {
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
});

export default conn;
