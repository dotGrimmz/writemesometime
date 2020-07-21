import axios from "axios";

class WMSService {
  createNewUser(body) {
    return axios.post("http://localhost:5000/wmsapp/register", body);
  }

  authenticateCredentials(body) {
    return axios.post("http://localhost:5000/wmsapp/login", body);
  }
}

export default WMSService;
