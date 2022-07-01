import axios from "axios";
import { ResponseResult } from "../models";

class FilterService {
  private readonly requestURL;

  constructor(requestURL: string) {
    this.requestURL = requestURL;
  }

  async getMakes() {
    return await axios.get(`${this.requestURL}/filter`);
  }

  async getModels(make: string) {
    return await axios.get(`${this.requestURL}/filtmodel?make=${make}`);
  }

  async getYears(make: string, model: string) {
    return await axios.get(
      `${this.requestURL}/filtyear?make=${make}&model=${model}`
    );
  }

  async searchCar(make: string, model: string, year: string) {
    return await axios.get<ResponseResult>(
      `${this.requestURL}/s?make=${make}&model=${model}&year=${year}`
    );
  }
}

export default FilterService;
