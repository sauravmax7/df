import http from "../http-common";


export class AdminDashboardService {

 
  categorywiseNewsCount=()=>{
 
    return http.get("/news/categorycount");
  }

  getMostReadNews=()=>{
    console.log("in most read get");
    return http.get("/news/mostread");
  }

  getPendingRequests=()=>{
  console.log("in pending request");
    return http.get("/users/list/pendingrequest");
  }

  updateStatus=(data)=>{
       return http.post("/users/handleRequest",data);
     }
//news controller
getIssueCount=()=>{
  return http.get("/news/issuelog");
  
}

getDetailedIssuedLog=(data)=>{
  return http.post("/news/detailedlog",data);

}

getDetailednews=(data)=>{
  return http.post("/news/detailedNews",data);

}

//delete reported news
deleteReportedNews=(data)=>{
  return http.post("/news/deletenews",data);
  
}
//retain reported news
retainReportedNews=(data)=>{
  return http.post("/news/deletereports",data);
  
}


  // updateStatus=(id,data)=>{
  //   return http.put(`/users/handleRequest/${id}`,data);
  // }
  
  
  
  // handleRequests(){
  //    return http.post("/handleRequest", data);
  // }

  // issueLog(){
  //   return http.get("/issuelog");
  // }

  // detailedIssueLog(){
  //   return http.post("/detailedlog", data);
  // }
  

// for tutorials 
  //   create(data) {
  //   return http.post("/tutorials", data);
  // }

  // createUser(data) {
  //   return http.post("/users", data);
  // }

  // update(id, data) {
  //   return http.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }

}

export default new AdminDashboardService();