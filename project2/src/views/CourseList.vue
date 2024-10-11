<template>
  <div class="container-fluid full-width-container my-4">
     <!-- Search Bar using course number -->
    <div class="input-group mb-3">
      <input 
        type="text" 
        class="form-control" 
        v-model="searchKeyword" 
        placeholder="Search by course number"
        @keyup.enter="searchCourse" 
      />
      <button class="btn btn-primary" @click="searchCourse">Search</button>
    </div>
    <!-- Add course form component -->
    <AddCourse @courseAdded="addCourse" />

    <div class="card-header text-center">
      <h3>Courses</h3>
    </div>
    <div class="card-body">
      <p class="text-center"><b>{{ message }}</b></p>

      <div class="course-list">
        <div v-for="item in courses" :key="item.id" class="row py-2 align-items-center">
          <div class="col-3 text-left course-name">
            <strong>{{ item.coursename }}</strong>
          </div>
          <div class="col-3 text-center">
            {{ item.dept }}
          </div>
          <div class="col-6 d-flex justify-content-center">
            <button class="btn btn-outline-secondary" @click="editCourse(item)">
              <i class="mdi mdi-pencil"></i>&nbsp;Edit
            </button>
            <button class="btn btn-outline-info" @click="viewCourse(item)">
              <i class="mdi mdi-format-list-bulleted-type"></i>&nbsp;View
            </button>
            <button class="btn btn-outline-danger" @click="navigateToDelete(item.id)">
              <i class="mdi mdi-trash-can"></i>&nbsp;Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import CourseServices from "../services/courseServices"; 

const router = useRouter();
const courses = ref([]);
const message = ref("");
const searchKeyword = ref(""); 

// Fetch courses
const retrieveCourses = async () => {
  try {
    const response = await CourseServices.getAll();
    courses.value = response.data; 
    message.value = ""; 
  } catch (e) {
    message.value = e.response.data.message || "An error occurred while fetching courses.";
  }
};

// Function to handle course addition
const addCourse = (newCourse) => {
  console.log("Before adding:", courses.value); // Log current state
  courses.value.unshift(newCourse); // Add the new course to the top of the list
  console.log("After adding:", courses.value); // Log updated state
  message.value = "Course added successfully!";
};

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

const searchCourse = () => {
  const keyword = searchKeyword.value;

  // Request to the backend API with coursenum as query param
  CourseServices.getAll({
    coursenum: keyword,  // Search based on course number
  })
  .then((response) => {
    courses.value = response.data;  // Update course list with search results
  })
  .catch((e) => {
    message.value = e.response.data.message;
  });
};

// Fetch courses when the component mounts
onMounted(retrieveCourses);
</script>

<style scoped>
.full-width-container {
  width: 100%;
  margin: 0; 
}

.course-list {
  margin-top: 20px; 
}

.row {
  display: flex; 
  align-items: center; 
  padding: 10px 0; 
  border-bottom: 1px solid #eaeaea; 
}

.row:last-child {
  border-bottom: none; 
}

.col-3 {
  text-align: left; 
}

.course-name {
  width: 250px; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap; 
}

.col-6 {
  display: flex; 
  justify-content: center; 
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
