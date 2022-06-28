import CarService from "../services/carService";

class CarController {
  constructor(private readonly carService: CarService) {}

  async createCar(request: any, response: any) {
    const result = await this.carService.addCar(request.body);

    if (!result) return response.status(500).send("Bad request");

    return response.send(result);
  }
  async updateCar(request: any, response: any) {
    const result = await this.carService.updateCar(
      request.params.id,
      request.body
    );

    if (!result) return response.status(500).send("Bad request");

    return response.send(result);
  }
  async removeCar(request: any, response: any) {
    const result = await this.carService.removeCar(request.body);

    if (!result) return response.status(500).send("Bad request");

    response.send(result);
  }
  async getCar(request: any, response: any) {
    const result = await this.carService.getCar(request.params.id);

    if (!result) return response.status(404).send("Car not found");

    return response.send(result);
  }
  async getCars(request: any, response: any) {
    const { limit, page } = request.query;
    const result = await this.carService.getCars(page, limit);

    if (!result) return response.status(404).send("Cars not found");

    return response.send(result);
  }

  async getCarBySearch(request: any, response: any) {
    const { make, model, year } = request.query;
    const result = await this.carService.getCarBySearch(make, model, year);

    if (!result) return response.status(404).send("Cars not found");

    return response.send(result);
  }

  async getMakes(request: any, response: any) {
    const result = await this.carService.getMakes();

    if (!result) return response.status(404).send("Makes not found");

    return response.send(result);
  }

  async getModels(request: any, response: any) {
    const { make } = request.query;
    const result = await this.carService.getModels(make);

    if (!result) return response.status(404).send("Models not found");

    return response.send(result);
  }

  async getYears(request: any, response: any) {
    const { make, model } = request.query;
    const result = await this.carService.getYears(make, model);

    if (!result) return response.status(404).send("Years not found");

    return response.send(result);
  }
}

export default CarController;
