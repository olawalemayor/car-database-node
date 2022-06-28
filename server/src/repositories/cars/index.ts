import Car from "./carModel";
import Cars from "./carSchema";

class CarRepository {
  private readonly _cars = Cars;

  async addCar(car: Car) {
    try {
      const checkCar = await this._cars.findById(car._id);
      if (checkCar) return;

      const newCar = new Cars({ ...car });

      return await newCar.save();
    } catch (error) {
      throw error;
    }
  }

  async updateCar(id: Car["_id"], params: Car) {
    try {
      const car = await this._cars.findById(id);
      if (!car) return;

      car.set({ ...params });

      return car.save();
    } catch (error) {
      throw error;
    }
  }

  async removeCar(id: Car["_id"]) {
    try {
      const car = await this._cars.deleteOne({ _id: id });
      return car;
    } catch (error) {
      throw error;
    }
  }

  async getCars(page: number, limit: number) {
    try {
      return await this._cars
        .find()
        .limit(limit)
        .skip(limit * page);
    } catch (error) {
      throw error;
    }
  }

  async getCar(id: Car["_id"]) {
    try {
      return await this._cars.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async getMakes() {
    try {
      return await this._cars.find().select("model").distinct("model");
    } catch (error) {
      throw error;
    }
  }

  async getModels(make: string) {
    try {
      return await this._cars
        .find({ model: make })
        .select("brand")
        .distinct("brand");
    } catch (error) {
      throw error;
    }
  }

  async getYears(make: string, model: string) {
    try {
      const result: any = await this._cars
        .find({ model: make, brand: model })
        .select("url");

      interface Result {
        _id: string;
        url: string;
      }

      const years: string[] = [];

      const dateRegEx = /\d{4}/g;

      result.forEach((car: Result) => {
        const splitYear = car.url.match(dateRegEx);
        splitYear && years.push(splitYear[0]);
      });

      return years;
    } catch (error) {
      throw error;
    }
  }

  async getCarBySearch(make: string, model: string, year: string) {
    try {
      const yearRegEx = new RegExp(`.*${year}.*`);

      const result = await this._cars.find({
        model: make,
        brand: model,
        url: yearRegEx,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default CarRepository;
