<template>
    <div class="container my-4">
      <h3>Edit Course</h3>
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
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import CourseServices from "../services/courseServices";
  
  const router = useRouter();
  const course = ref({});
  
  const saveCourse = () => {
    if (!course.value.id) {
      console.error("Course ID is missing");
      return;
    }
  
    CourseServices.update(course.value.id, course.value) // Use 'id' from course object
      .then(() => {
        router.push({ name: "courses" }); // Redirect back to CourseList
      })
      .catch((error) => {
        console.error("Error updating course:", error.response ? error.response.data : error.message);
      });
  };
  
  onMounted(() => {
    const courseId = router.currentRoute.value.params.id; // Get the course ID from the route params
    CourseServices.get(courseId) // Ensure you call the correct method to get course by ID
      .then((response) => {
        course.value = response.data; // Set course data for editing
      })
      .catch((error) => {
        console.error("Error fetching course:", error.response ? error.response.data : error.message);
      });
  });
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  