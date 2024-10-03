import apiClient from "./apiClient"; // Ensure the path is correct

export default {
  getAll() {
    return apiClient.get("/course"); // Get all courses
  },
  
  get(id) {
    return apiClient.get(`/course/${id}`); // Get course by ID
  },
  
  create(data) {
    return apiClient.post("/course", data); // Create a new course
  },
  
  update(id, data) {
    return apiClient.put(`/course/${id}`, data); // Update course by ID
  },
  
  delete(id) {
    return apiClient.delete(`/course/${id}`); // Delete course by ID
  },
  
  deleteAll() {
    return apiClient.delete("/course"); // Delete all courses
  },
};
