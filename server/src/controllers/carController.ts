import CarService from "../services/carService";

class CarController {
  constructor(private readonly carService: CarService) {}

  async createCar(request: any, response: any) {
    const result = await this.carService.addCar(request.body);

    if (!result) return response.status(500).send("Bad request");

    return response.send(result).status(200);
  }

  async updateCar(request: any, response: any) {
    const result = await this.carService.updateCar(
      request.params.id,
      request.body
    );

    if (!result) return response.status(500).send("Bad request");

    return response.send(result).status(200);
  }

  async removeCar(request: any, response: any) {
    const result = await this.carService.removeCar(request.body);

    if (!result) return response.status(500).send("Bad request");

    return response.send(result).satus(200);
  }

  async getCar(request: any, response: any) {
    const result = await this.carService.getCar(request.params.id);

    if (!result) return response.status(404).send("Car not found");

    return response.send(result).status(200);
  }

  async getCars(request: any, response: any) {
    const { limit, page } = request.query;

    const currentPage = page || 1;

    const result = await this.carService.getCars(currentPage, limit);

    if (!result) return response.status(404).send("Cars not found");

    const nextPage = parseInt(page) + 1;

    const res = {
      result,
      next: await this.carService.getCars(nextPage, limit),
    };

    return response.send(res).status(200);
  }

  async getCarBySearch(request: any, response: any) {
    const { make, model, year, page, limit } = request.query;

    const currentPage = page || 1;

    const result = await this.carService.getCarBySearch(
      make,
      model,
      year,
      currentPage,
      limit
    );

    if (!result) return response.status(404).send("Cars not found");

    const nextPage = parseInt(page) + 1;

    const res = {
      result,
      next: await this.carService.getCarBySearch(
        make,
        model,
        year,
        nextPage,
        limit
      ),
    };

    return response.send(res).status(200);
  }

  async getMakes(request: any, response: any) {
    const result = await this.carService.getMakes();

    if (!result) return response.status(404).send("Makes not found");

    return response.send(result).status(200);
  }

  async getModels(request: any, response: any) {
    const { make } = request.query;
    const result = await this.carService.getModels(make);

    if (!result) return response.status(404).send("Models not found");

    return response.send(result).status(200);
  }

  async getYears(request: any, response: any) {
    const { make, model } = request.query;
    const result = await this.carService.getYears(make, model);

    if (!result) return response.status(404).send("Years not found");

    return response.send(result).status(200);
  }
}

export default CarController;
