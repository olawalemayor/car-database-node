import mongoose from "mongoose";
import Car, { Engine } from "./carModel";

export const engineSchema = new mongoose.Schema<Engine>({
  Cylinders: String,
  Displacement: String,
  Power: String,
  Torque: String,
  "Fuel System": String,
  Fuel: String,
  "Fuel capacity": String,
  "Top Speed": String,
  "Acceleration 0-62 Mph (0-100 kph)": String,
  "Drive Type": String,
  Gearbox: String,
  Front: String,
  Rear: String,
  "Tire Size": String,
  Length: String,
  Width: String,
  Height: String,
  "Front/rear Track": String,
  Wheelbase: String,
  "Ground Clearance": String,
  "Cargo Volume": String,
  "Turning circle (curb to curb)": String,
  "Aerodynamics (Cd)": String,
  "Unladen Weight": String,
  "Gross Weight Limit": String,
  City: String,
  Highway: String,
  Combined: String,
  "CO2 Emissions": String,
});

export const CarSchema = new mongoose.Schema<Car>({
  url: String,
  model: String,
  images_links: [String],
  engines: [
    {
      type: Map,
      of: engineSchema,
    },
  ],
  description: String,
  brand: String,
  brochures: [String],
});

const Cars = mongoose.model("cars", CarSchema);

export default Cars;
