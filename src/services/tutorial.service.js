import http from "../http-common";

class TutorialDataService {

  getAllNews(){
    // console.log("Fromhttp.get("/news"));
    return http.get("/news");
  }

  getAllCities(){
    // console.log("Fromhttp.get("/news"));
    return http.get("/cities");
  }

  getAllStates(){
    // console.log("Fromhttp.get("/news"));
    return http.get("/states");
  }



  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  createUser(data) {
    return http.post("/users", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();
