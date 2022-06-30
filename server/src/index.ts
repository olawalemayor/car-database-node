import express from "express";
import cors from "cors";
import "dotenv/config";

import conn from "./db";
import { CarController } from "./controllers";
import { CarRepository } from "./repositories/";
import { CarService } from "./services";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 9000;

const carRepo = new CarRepository();
const carService = new CarService(carRepo);
const carController = new CarController(carService);

app.get("/api/", (req, res) => carController.getCars(req, res)); //Get all cars
app.get("/api/:id", (req, res) => carController.getCar(req, res)); //Get car by ID
app.post("/api/", (req, res) => carController.createCar(req, res)); //Create new car
app.post("/api/:id", (req, res) => carController.updateCar(req, res)); //Update car
app.delete("/api/:id", (req, res) => carController.removeCar(req, res)); //Remove car from database
app.get("/s", (req, res) => carController.getCarBySearch(req, res)); // Search car by make model and year
app.get("/filter", (req, res) => carController.getMakes(req, res)); // Get all makes
app.get("/filtmodel", (req, res) => carController.getModels(req, res)); //Filter models by makes
app.get("/filtyear", (req, res) => carController.getYears(req, res)); // Filter years by make and models
app.get("*", (req, res) => {
  res.send("Invalid route. Error 404");
});

const main = async () => {
  await conn; //wait for database connection

  app.listen(port, () => console.log(`app is listening on port ${port} !`));
};

main();
