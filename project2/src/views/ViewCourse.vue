<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CourseServices from '../services/courseServices'; // Update with your course services

// Get route parameters
const route = useRoute();
const courseId = route.params.id;

const course = ref({});
const message = ref('');

// Function to retrieve course details by ID
const retrieveCourse = () => {
  CourseServices.get(courseId)
    .then((response) => {
      course.value = response.data; // Ensure the API response structure matches
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

// Fetch the course details when the component is mounted
onMounted(() => {
  retrieveCourse();
});
</script>

<template>
  <div class="container my-4">
    <!-- Display a message if something goes wrong -->
    <p v-if="message" class="text-danger">{{ message }}</p>

    <!-- Display course details -->
    <div v-if="course">
      <h3 class="text-center mb-4">Course Details</h3>

      <div class="row mb-3">
        <div class="col-sm-3"><strong>Course Name:</strong></div>
        <div class="col-sm-9">{{ course.coursename }}</div>
      </div>

      <div class="row mb-3">
        <div class="col-sm-3"><strong>Course ID:</strong></div>
        <div class="col-sm-9">{{ course.id }}</div>
      </div>

      <div class="row mb-3">
        <div class="col-sm-3"><strong>Department:</strong></div>
        <div class="col-sm-9">{{ course.dept }}</div>
      </div>

      <div class="row mb-3">
        <div class="col-sm-3"><strong>Level:</strong></div>
        <div class="col-sm-9">{{ course.level }}</div>
      </div>

      <div class="row mb-3">
        <div class="col-sm-3"><strong>Credit Hours:</strong></div>
        <div class="col-sm-9">{{ course.hours }}</div>
      </div>

      <div class="row mb-3">
        <div class="col-sm-3"><strong>Description:</strong></div>
        <div class="col-sm-9">{{ course.description }}</div>
      </div>

      <!-- Back button -->
      <div class="text-center mt-4">
        <router-link :to="{ name: 'courses' }" class="btn btn-primary">
          Back to Courses
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  border-bottom: 1px solid #eaeaea; /* Adds a subtle separator between rows */
  padding-bottom: 10px;
}

.row:last-child {
  border-bottom: none; /* Removes border for the last row */
}

.text-center {
  text-align: center;
}

.btn {
  margin-top: 20px;
}
</style>
