<template>
  <div class="container-fluid full-width-container my-4">
    <div class="card-header text-center">
      <h3>Courses</h3>
    </div>
    <div class="card-body">
      <p class="text-center"><b>{{ message }}</b></p>

      <!-- Loop through courses and display them in a full-width, borderless layout -->
      <div v-for="item in courses" :key="item.id" class="row py-2 align-items-center">
        <div class="col-3 text-center">
          <strong>{{ item.coursename }}</strong>
        </div>
        <div class="col-3 text-center">
          {{ item.dept }}
        </div>
        <div class="col-6 d-flex justify-content-center">
          <button class="btn btn-light mx-2" @click="editCourse(item)">
            <i class="mdi mdi-pencil"></i>&nbsp;Edit
          </button>
          <button class="btn btn-light mx-2" @click="viewCourse(item)">
            <i class="mdi mdi-format-list-bulleted-type"></i>&nbsp;View
          </button>
          <button class="btn btn-light mx-2" @click="navigateToDelete(item.id)">
            <i class="mdi mdi-trash-can"></i>&nbsp;Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CourseServices from "../services/courseServices"; // Assuming it's already correctly linked

const router = useRouter();
const courses = ref([]);
const message = ref("");

// Function to edit course
const editCourse = (course) => {
  router.push({ name: "editCourse", params: { id: course.id } });
};

// Function to view course
const viewCourse = (course) => {
  router.push({ name: "viewCourse", params: { id: course.id } });
};

// Function to navigate to delete course
const navigateToDelete = (id) => {
  router.push({ name: "deleteCourse", params: { id } });
};

// Fetch courses
const retrieveCourses = () => {
  CourseServices.getAll()
    .then((response) => {
      courses.value = response.data; // Ensure this aligns with your API response structure
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

// Initial fetch of courses
retrieveCourses();
</script>

<style scoped>
.full-width-container {
  width: 100vw; /* Full viewport width */
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
}

.row {
  border-bottom: 1px solid #eaeaea; /* Adds a subtle separator between course rows */
}

.row:last-child {
  border-bottom: none; /* Removes border for the last item */
}

.col-3,
.col-6 {
  padding: 10px 0; /* Adds spacing between the columns */
}

.btn {
  display: flex;
  align-items: center;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.text-center {
  text-align: center;
}
</style>
