import mongoose from "mongoose";
import config from "config";

const dbURL: string = process.env.DB_HOST || config.get("dbHost");
const dbName: string = process.env.DB_NAME || config.get("dbName");
const dbUser: string = process.env.DB_USER || config.get("dbUser");
const dbPass: string = process.env.DB_PASSWORD || config.get("dbPass");

const conn = mongoose.connect("mongodb://" + dbURL, {
  dbName,
  user: dbUser,
  pass: dbPass,
});

export default conn;
