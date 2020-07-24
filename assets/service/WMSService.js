import axios from "axios";

class WMSService {
  createNewUser(body) {
    return axios.post("http://localhost:5000/wmsapp/register", body);
  }

  authenticateCredentials(body) {
    return axios.post("http://localhost:5000/wmsapp/login", body);
  }

  getAllPosts() {
    return axios.get("http://localhost:5000/wmsapp/");
  }

  getAllUsersPosts(id) {
    return axios.get(`http://localhost:5000/wmsapp/${id}`);
  }

  postUserMessage(body, id) {
    return axios.post(`http://localhost:5000/wmsapp/newpost/${id}`, body);
  }
}

export default WMSService;
