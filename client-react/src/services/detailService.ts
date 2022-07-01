import axios from "axios";
class DetailService {
  private readonly requestURL;

  constructor(requestUrl: string) {
    this.requestURL = requestUrl;
  }

  async getCarInfo(id: string) {
    return await axios.get(`${this.requestURL}/api/${id}`);
  }
}

export default DetailService;
