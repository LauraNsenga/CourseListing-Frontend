<template>
    <div class="container my-4">
      <h1>Save Course</h1>
  
      <!-- Form to capture course details -->
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
  
        <button type="submit" class="btn btn-primary">Save Course</button>
      </form>
  
      <!-- Display success or error message -->
      <p v-if="message" class="mt-3">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import CourseServices from "../sevices/courseServices"; 
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  export default {
    name: 'SaveCourse',
    setup() {
      const course = ref({
        coursename: "",
        dept: "",
        
      });
      const message = ref("");
      const router = useRouter();
  
      const saveCourse = () => {
      
        CourseServices.create(course.value)
          .then(() => {
            message.value = "Course saved successfully!";
           
            router.push({ name: "courses" });
          })
          .catch((error) => {
            
            message.value = "Error saving course: " + (error.response ? error.response.data.message : error.message);
          });
      };
  
      return {
        course,
        message,
        saveCourse,
      };
    }
  };
  </script>
  
  <style scoped>
  /* Optional styles */
  </style>
  