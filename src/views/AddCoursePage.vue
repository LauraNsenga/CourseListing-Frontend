<template>
  <div class="course-form">
    <h2>Create a New Course</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="courseName">Course Name</label>
        <input type="text" id="courseName" v-model="course.coursename" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="coursenum">Course Number</label>
        <input type="text" id="coursenum" v-model="course.coursenum" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="dept">Department</label>
        <input type="text" id="dept" v-model="course.dept" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="level">Level</label>
        <textarea id="level" v-model="course.level" required class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="hours">Hours</label>
        <textarea id="hours" v-model="course.hours" required class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="courseDescription">Course Description</label>
        <textarea id="courseDescription" v-model="course.description" required class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Create Course</button> <!-- Added Bootstrap classes -->
    </form>
  </div>
</template>


<script>
import courseServices from '../services/courseServices';

export default {
  data() {
    return {
      course: {
        coursename: "", // Changed to 'coursename' for consistency
        description: "",
        level: "",
        hours: "",
        dept: "",
        coursenum: "",
      },
    };
  },

  methods: {
    async submitForm() {
      console.log("Course data being submitted:", this.course);

      try {
        const response = await courseServices.create({
          coursenum: this.course.coursenum,
          name: this.course.coursename, // Changed 'name' to 'coursename'
          description: this.course.description,
          level: this.course.level,
          hours: this.course.hours,
          dept: this.course.dept,
        });

        if (response.status >= 200 && response.status < 300) {
          alert("Course created successfully!");

          this.$emit('courseAdded', {
            id: response.data.id,
            coursename: this.course.coursename,  // Changed 'name' to 'coursename'
            dept: this.course.dept,
            description: this.course.description,
            level: this.course.level,
            hours: this.course.hours,
            coursenum: this.course.coursenum,
          });

          this.resetForm();
          this.$router.push({ name: 'courses' });
        } else {
          alert("Failed to create course.");
        }
      } catch (error) {
        console.error("Error creating course:", error);
        alert("An error occurred while creating the course.");
      }
    },

    resetForm() {
      this.course = {
        coursename: "", 
        coursenum: "",
        dept: "",
        level: "",
        hours: "",
        description: "",
        
        
      };
    },
  },
};
</script>


<style scoped>
.course-form {
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5em;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
}


</style>
