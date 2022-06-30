import mongoose from "mongoose";
import Car from "./carModel";

export const CarSchema = new mongoose.Schema<Car>({
  url: String,
  model: String,
  images_links: [String],
  engines: [],
  description: String,
  brand: String,
  brochures: [String],
});

const Cars = mongoose.model("cars", CarSchema);

export default Cars;
