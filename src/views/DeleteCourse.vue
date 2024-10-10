<template>
    <div class="container-fluid full-width-container my-4">
      <div class="card">
        <div class="card-header text-center">
          <h3>Delete Course</h3>
        </div>
        <div class="card-body">
          <p class="text-center">{{ message }}</p>
          <div v-if="courseToDelete">
            <p class="text-center">
              Are you sure you want to delete the course "<strong>{{ courseToDelete.coursename }}</strong>"?
            </p>
            <div class="d-flex justify-content-center">
              <button class="btn btn-secondary mx-2" @click="cancelDelete">Cancel</button>
              <button class="btn btn-danger mx-2" @click="deleteCourse">Delete</button>
            </div>
          </div>
          <div v-else>
            <p class="text-center">Loading course details...</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter, useRoute } from "vue-router";
  import CourseServices from "../services/courseServices"; 
  
  const router = useRouter();
  const route = useRoute();
  const message = ref("");
  const courseToDelete = ref(null);
  const showDeleteConfirm = ref(true); // Automatically show confirmation when page loads
  
  // Fetch the course details using the ID from the route
  const retrieveCourse = () => {
    const courseId = route.params.id;
    if (courseId) {
      CourseServices.get(courseId)
        .then((response) => {
          courseToDelete.value = response.data; // Store course data for confirmation
        })
        .catch((e) => {
          message.value = e.response?.data?.message || 'Failed to retrieve course.';
        });
    }
  };
  
  // Proceed to delete the course
  const deleteCourse = () => {
    if (courseToDelete.value) {
      CourseServices.delete(courseToDelete.value.id)
        .then(() => {
          message.value = `Course "${courseToDelete.value.coursename}" deleted successfully!`;
          router.push({ name: "courses" }); // Redirect to course list after deletion
        })
        .catch((e) => {
          message.value = e.response?.data?.message || 'Failed to delete course.';
        });
    }
  };
  
  // Cancel deletion and navigate back
  const cancelDelete = () => {
    router.push({ name: "courses" }); // Go back to course list
  };
  
  // Fetch course on component mount
  retrieveCourse();
  </script>
  
  <style scoped>
  .full-width-container {
    width: 100vw; /* Full viewport width */
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
  }
  
  .container {
    max-width: 600px;
    margin: auto;
  }
  
  .card {
    margin-top: 20px; /* Space between card and top */
  }
  
  .text-center {
    text-align: center;
  }
  
  .d-flex {
    display: flex;
    align-items: center;
    justify-content: center; /* Center buttons horizontally */
  }
  
  .btn {
    flex: 1; /* Make buttons take equal space */
    margin: 0 5px; /* Space between buttons */
  }
  </style>
  