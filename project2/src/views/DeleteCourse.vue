<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import CourseServices from "../services/courseServices"; // Assuming it's correctly linked

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
        message.value = e.response.data.message;
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
        message.value = e.response.data.message;
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

<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h3>Delete Course</h3>
      </div>
      <div class="card-body">
        <p>{{ message }}</p>
        <div v-if="courseToDelete">
          <p>Are you sure you want to delete the course "{{ courseToDelete.coursename }}"?</p>
          <div class="d-flex justify-content-center">
            <button class="btn btn-secondary mx-2" @click="cancelDelete">Cancel</button>
            <button class="btn btn-danger mx-2" @click="deleteCourse">Delete</button>
          </div>
        </div>
        <div v-else>
          <p>Loading course details...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}

.d-flex {
  display: flex;
  align-items: center;
}
</style>
