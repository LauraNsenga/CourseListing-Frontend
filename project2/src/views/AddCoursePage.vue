<!-- src/views/AddCourse.vue -->
<template>
  <div class="container my-4">
    <h1>Add Course Page</h1>
    <form @submit.prevent="saveCourse">
      <div class="mb-3">
        <label for="coursename" class="form-label">Course Name</label>
        <input type="text" class="form-control" id="coursename" v-model="course.coursename" required />
      </div>
      <div class="mb-3">
        <label for="dept" class="form-label">Department</label>
        <input type="text" class="form-control" id="dept" v-model="course.dept" required />
      </div>
      <!-- Add more fields as necessary -->
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import CourseServices from "../sevices/courseServices";

const router = useRouter();
const course = ref({
  coursename: '',
  dept: '',
  // Add other fields as needed
});

const saveCourse = async () => {
  try {
    await CourseServices.create(course.value); // Call the create method from CourseServices
    router.push({ name: 'courses' }); // Redirect to the course list or appropriate route after saving
  } catch (error) {
    console.error('Error adding course:', error);
  }
};
</script>

<style scoped>
/* Add any styles if needed */
</style>
