<template>
    <div>
      <v-container>
        <v-toolbar>
          <v-toolbar-title>Delete Course</v-toolbar-title>
        </v-toolbar>
  
        <br />
        <h4>{{ message }}</h4>
        <br />
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            id="courseId"
            v-model="courseId"
            label="Course ID"
            required
          ></v-text-field>
  
          <v-btn
            :disabled="!valid"
            color="error"
            class="mr-4"
            @click="deleteCourse()"
          >
            Delete Course
          </v-btn>
  
          <v-btn color="primary" class="mr-4" @click="cancel()"> Cancel </v-btn>
        </v-form>
      </v-container>
    </div>
  </template>
  
  <script>
  import CourseServices from "../services/courseServices";
  
  export default {
    name: "DeleteCourse",
    data() {
      return {
        valid: false,
        courseId: "",
        message: "Enter Course ID to delete",
      };
    },
    methods: {
      deleteCourse() {
        if (this.courseId) {
          CourseServices.delete(this.courseId)
            .then(() => {
              this.message = `Course with ID ${this.courseId} deleted successfully!`;
              this.courseId = ""; // Reset the input
            })
            .catch((e) => {
              this.message = e.response.data.message || "An error occurred while deleting the course.";
            });
        } else {
          this.message = "Please provide a valid Course ID.";
        }
      },
      cancel() {
        this.$router.push({ name: "courses" });
      },
    },
  };
  </script>
  
  <style scoped>
  .v-container {
    margin-top: 20px;
  }
  </style>
  