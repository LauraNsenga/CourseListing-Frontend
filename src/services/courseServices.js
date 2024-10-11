import apiClient from "./apiClient"; // Ensure the path is correct

export default {
  // getAll() {
  //   return apiClient.get("/"); // Get all courses
  // },

  getAll() {
    return apiClient.get("/course");
  },
  
  get(id) {
    return apiClient.get(`/${id}`); // Get course by ID
  },
  
  create(data) {
    return apiClient.post("/", data); // Create a new course
  },
  
  update(id, data) {
    return apiClient.put(`/${id}`, data); // Update course by ID
  },
  
  delete(id) {
    return apiClient.delete(`/${id}`); // Delete course by ID
  },
  
  deleteAll() {
    return apiClient.delete("/"); // Delete all courses
  },
};
