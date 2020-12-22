import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/news");
  }

  getAllUsers(email) {
    return http.get(`/users/${email}`);
  }

  findAllNewsByCity(city_id) {
    return http.get(`/news/city/${city_id}`);
  }

  findAllNewsbyReporter(id) {
    console.log(id);

    return http.get(`/news/reporter/${id}`);
  }

  findAllCategories() {
    return http.get("/categories");
  }

  getNewsById(id) {
    return http.post("/news/getnews", id);
  }
  getUserById(id) {
    return http.get(`/users/byid/${id}`);
  }

  createNews(data) {
    console.log(data);
    return http.post("/news", data);
  }
  createReport(data) {
    return http.post("/reports", data);
  }

  getUserByEmail(email) {
    return http.get(`/users/${email}`);
  }
  updatePassword(email, data) {
    return http.put(`/users/${email}/${data}`);
  }

  getAllNews() {
    // console.log("Fromhttp.get("/news"));
    return http.get("/news");
  }

  getAllCities() {
    // console.log("Fromhttp.get("/news"));
    return http.get("/cities");
  }

  getAllStates() {
    // console.log("Fromhttp.get("/news"));
    return http.get("/states");
  }

  getAllCategories() {
    return http.get("/categories");
  }

  updateCount(id) {
    console.log(id);
    return http.post(`/news/update/`, id);
  }

  getAllReportCategory() {
    return http.get("/reportcategory");
  }
  //----------------User Registration by Neeraj Gole------------------------
  checkIfUserMailExist(mail) {
    return http.post("/users/checkmail", mail);
  }

  createUser(data) {
    return http.post("/users", data);
  }
}

export default new DataService();