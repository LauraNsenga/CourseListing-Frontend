<template>
  <div class="container my-4">
    <h3>Edit Course</h3>
    <form @submit.prevent="saveCourse">
      <div class="mb-3">
        <label for="coursename" class="form-label">Course Name</label>
        <input
          type="text"
          class="form-control"
          id="coursename"
          v-model="course.coursename"
          required
        />
      </div>
      <div class="mb-3">
        <label for="courseNumber" class="form-label">Course Number</label>
        <input
          type="text"
          class="form-control"
          id="courseNumber"
          v-model="course.coursenum" 
          required
        />
      </div>
      <div class="mb-3">
        <label for="dept" class="form-label">Department</label>
        <input
          type="text"
          class="form-control"
          id="dept"
          v-model="course.dept"
          required
        />
      </div>
      <div class="mb-3">
        <label for="level" class="form-label">Level</label>
        <input
          type="text"
          class="form-control"
          id="level"
          v-model="course.level"
          required
        />
      </div>
      <div class="mb-3">
        <label for="hours" class="form-label">Hours</label>
        <input
          type="number"
          class="form-control"
          id="hours"
          v-model.number="course.hours"
          min="1"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="description"
          v-model="course.description"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>
    <div v-if="errorMessage" class="alert alert-danger mt-3">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import CourseServices from "../services/courseServices";

const router = useRouter();
const course = ref({
  coursename: '',
  coursenum: '',
  dept: '',
  level: '',
  hours: null,
  description: ''
});
const errorMessage = ref(''); // Store error message

const saveCourse = () => {
  if (!course.value.id) {
    errorMessage.value = "Course ID is missing"; // Set user-friendly error message
    return;
  }

  CourseServices.update(course.value.id, course.value)
    .then(() => {
      router.push({ name: "courses" }); // Redirect back to CourseList
    })
    .catch((error) => {
      errorMessage.value = "Error updating course. Please try again."; 
      console.error("Error updating course:", error.response ? error.response.data : error.message);
    });
};

onMounted(() => {
  const courseId = router.currentRoute.value.params.id;
  console.log("courseId:", courseId); 
  CourseServices.get(courseId)
    .then((response) => {
      course.value = response.data; // Ensure all properties are set
    })
    .catch((error) => {
      errorMessage.value = "Error fetching course data."; // Handle fetch error
      console.error("Error fetching course:", error.response ? error.response.data : error.message);
    });
});
</script>

