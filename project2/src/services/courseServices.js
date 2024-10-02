
import apiClient from "./services";

export default {
  getAll() {
    return apiClient.get("/course/");
  },
  
  get(id) {
    return apiClient.get(`/course/${id}`);
  },
  create(data) {
    return apiClient.post("/course", data);
  },
  update(id, data) {
    return apiClient.put(`/course/${id}`, data);
  },
  delete(id) {
    return apiClient.delete(`/course/${id}`);
  },
  deleteAll() {
    return apiClient.delete(`/course`);
  },
};
