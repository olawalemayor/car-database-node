import mongoose from "mongoose";
import config from "config";

const dbURL: string = config.get("dbHost");
const dbName: string = config.get("dbName");
const dbUser: string = config.get("dbUser");
const dbPass: string = config.get("dbPass");

const conn = mongoose.connect("mongodb://" + dbURL, {
  dbName,
  user: dbUser,
  pass: dbPass,
});

export default conn;
