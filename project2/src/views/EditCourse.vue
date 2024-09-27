<template>
  <div class="container my-4">
    <h3>Edit Course</h3>
    <form @submit.prevent="saveCourse">
      <!-- Course Name -->
      <div class="mb-3">
        <label for="coursename" class="form-label">Course Name</label>
        <input type="text" class="form-control" id="coursename" v-model="course.coursename" required />
      </div>

      <!-- Department -->
      <div class="mb-3">
        <label for="dept" class="form-label">Department</label>
        <input type="text" class="form-control" id="dept" v-model="course.dept" required />
      </div>

      <!-- Course Number -->
      <div class="mb-3">
        <label for="coursenum" class="form-label">Course Number</label>
        <input type="text" class="form-control" id="coursenum" v-model="course.coursenum" required />
      </div>

      <!-- Level -->
      <div class="mb-3">
        <label for="level" class="form-label">Level</label>
        <input type="text" class="form-control" id="level" v-model="course.level" required />
      </div>

      <!-- Hours -->
      <div class="mb-3">
        <label for="hours" class="form-label">Hours</label>
        <input type="number" class="form-control" id="hours" v-model="course.hours" required />
      </div>

      <!-- Description -->
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" v-model="course.description" required></textarea>
      </div>

      <!-- Save Button -->
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import CourseServices from "../sevices/courseServices";

const router = useRouter();
const course = ref({
  coursename: '',
  dept: '',
  coursenum: '',
  level: '',
  hours: '',
  description: '' // Initialize description with an empty string
});

// Function to save the updated course
const saveCourse = () => {
  if (!course.value.id) {
    console.error("Course ID is missing");
    return;
  }

  CourseServices.update(course.value.id, course.value)
    .then(() => {
      router.push({ name: "courses" }); // Redirect back to CourseList after saving
    })
    .catch((error) => {
      console.error("Error updating course:", error.response ? error.response.data : error.message);
    });
};

// Fetch the course details when the component is mounted
onMounted(() => {
  const courseId = router.currentRoute.value.params.id; // Get the course ID from route params
  CourseServices.get(courseId)
    .then((response) => {
      console.log(response.data); // Log the response to ensure description is present
      course.value = response.data; // Populate the course object with the fetched data
    })
    .catch((error) => {
      console.error("Error fetching course:", error.response ? error.response.data : error.message);
    });
});
</script>

<style scoped>
/* You can style your form elements here */
</style>
