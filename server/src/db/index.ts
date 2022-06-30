import mongoose from "mongoose";

const user = process.env.DB_USER;
const pass = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

const uri = process.env.DB_HOST;

const conn =
  uri &&
  mongoose
    .connect(uri, {
      user,
      pass,
      dbName,
    })
    .then(() => console.log("Connected to databse!!!"))
    .catch((err) => {
      throw new Error(err);
    });

export default conn;
