import CarService from "./carService";
import { CarRepository } from "../repositories";
import Car from "../repositories/cars/carModel";

const carRepo = new CarRepository();

const carService = new CarService(carRepo);

describe("addCar", () => {
  it("Should add car", () => {
    carRepo.addCar = jest.fn().mockResolvedValue({ _id: "Test ID" });

    const car: Car = {
      brand: "Camry",
      model: "Toyota",
      brochures: ["Test brochure"],
      description: "Test description",
      engines: [
        { "Test engine": { "Test engine property": "Test engine value" } },
      ],
      images_links: ["Test image"],
      url: "Test URL",
    };

    carService.addCar(car);

    expect(carRepo.addCar).toHaveBeenCalledWith(car);
  });
});

describe("updateCar", () => {
  it("Should update car", () => {
    carRepo.updateCar = jest.fn().mockResolvedValue({ _id: "Test ID" });

    const car: Car = {
      brand: "Camry",
      model: "Toyota",
      brochures: ["Test brochure"],
      description: "Test description",
      engines: [
        { "Test engine": { "Test engine property": "Test engine value" } },
      ],
      images_links: ["Test image"],
      url: "Test URL",
    };

    const id = "Test ID";

    carService.updateCar(id, car);

    expect(carRepo.updateCar).toHaveBeenCalledWith(id, car);
  });
});

describe("removeCar", () => {
  it("Should remove car", () => {
    carRepo.removeCar = jest.fn().mockResolvedValue({});

    const id = "Test ID";

    carService.removeCar(id);

    expect(carRepo.removeCar).toHaveBeenCalledWith(id);
  });
});

describe("getCar", () => {
  it("Should get car", () => {
    carRepo.getCar = jest.fn().mockResolvedValue({});

    const id = "Test ID";

    carService.getCar(id);

    expect(carRepo.getCar).toHaveBeenCalledWith(id);
  });
});

describe("getCarBySearch", () => {
  it("Should get car using search parameters", () => {
    carRepo.getCarBySearch = jest.fn().mockResolvedValue({});

    const [make, model, year, page, limit] = [
      "Test make",
      "Test Model",
      "2022",
      1,
      5,
    ];

    carService.getCarBySearch(make, model, year, page, limit);

    expect(carRepo.getCarBySearch).toHaveBeenCalledWith(
      make,
      model,
      year,
      page,
      limit
    );
  });
});

describe("getMakes", () => {
  it("Should return all the makes in the database", () => {
    carRepo.getMakes = jest.fn().mockResolvedValue([]);

    carService.getMakes();

    expect(carRepo.getMakes).toHaveBeenCalled();
  });
});

describe("getModels", () => {
  it("Should return all the models of a particular make in the database", () => {
    carRepo.getModels = jest.fn().mockResolvedValue([]);

    carService.getModels("Test make");

    expect(carRepo.getModels).toHaveBeenCalledWith("Test make");
  });
});

describe("getYearss", () => {
  it("Should return all the models of a particular make in the database", () => {
    carRepo.getYears = jest.fn().mockResolvedValue([]);

    carService.getYears("Test make", "Test model");

    expect(carRepo.getYears).toHaveBeenCalledWith("Test make", "Test model");
  });
});
