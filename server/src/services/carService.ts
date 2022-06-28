import CarRepository from "../repositories/cars/index";
import Car from "../repositories/cars/carModel";

class CarService {
  constructor(private readonly carRepo: CarRepository) {}

  async addCar(car: Car) {
    return await this.carRepo.addCar(car);
  }

  async updateCar(id: string, params: Car) {
    return await this.carRepo.updateCar(id, params);
  }

  async removeCar(id: string) {
    return await this.carRepo.removeCar(id);
  }

  async getCars(page: number, limit: number) {
    return await this.carRepo.getCars(page, limit);
  }

  async getCar(id: Car["_id"]) {
    return await this.carRepo.getCar(id);
  }

  async getCarBySearch(make: string, model: string, year: string) {
    return await this.carRepo.getCarBySearch(make, model, year);
  }

  async getMakes() {
    return await this.carRepo.getMakes();
  }

  async getModels(make: string) {
    return await this.carRepo.getModels(make);
  }

  async getYears(make: string, model: string) {
    return await this.carRepo.getYears(make, model);
  }
}

export default CarService;
