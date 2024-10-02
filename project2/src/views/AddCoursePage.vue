<template>
  <div class="course-form">
    <h2>Create a New Course</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="courseName"> Course Name</label>
        <input type="text" id="courseName" v-model="course.name" required />
      </div>

      <div class="form-group">
        <label for="courseDescription"> Course Description</label>
        <textarea id="courseDescription" v-model="course.description" required></textarea>
      </div>

      <div class="form-group">
        <label for="credits"> Credits</label>
        <textarea id="credits" v-model="course.credits" required></textarea>
      </div>

      <div class="form-group">
        <label for="level"> Level</label>
        <textarea id="level" v-model="course.level" required></textarea>
      </div>

      <div class="form-group">
        <label for="hours"> Hours</label>
        <textarea id="hours" v-model="course.hours" required></textarea>
      </div>

      <div class="form-group">
      <label for="dept">Department</label>
      <input type="text" id="dept" v-model="course.dept" required />
    </div>

    <div class="form-group">
      <label for="coursenum">Course Number</label>
      <input type="text" id="coursenum" v-model="course.coursenum" required />
    </div>


      <button type="submit"> Create Course</button>
    </form>
  </div>
</template>

<script>
import courseServices from '../services/courseServices';

export default {
  data() {
    return {
      course: {
        name: "",
        description: "",
        credits: null,
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
        const response = await courseServices.create(this.course);

        // Check if response status is successful (2xx)
        if (response.status >= 200 && response.status < 300) {
          alert("Course created successfully!");
          // Reset the form data
          this.course = { name: "", description: "", credits: null, level: "", hours: "", dept: "", coursenum: "" };
        } else {
          alert("Failed to create course.");
        }
      } catch (error) {
        console.error("Error creating course:", error);
        alert("An error occurred while creating the course.");
      }
  },
},

  // methods: {
  //   async submitForm() {
  //     try {
  //       const response = await fetch("/course", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(this.course),
  //       });

  //       if (response.ok) {
  //         alert("Course created successfully!");
  //           this.course = { name: "", description: "", credits: null, level: "", hours: "", dept: "", coursenum: "" };        } else {
  //         alert("Failed to create course.");
  //       }
  //     } catch (error) {
  //       console.error("Error creating course:", error);
  //     }
  //   },
  // },
};
</script>

<style scoped>
.course-form {
  /* max-width: 600px; */
  margin: 0 auto;
  
}

.form-group {
  margin-bottom: 1.5em; /* Adds space between form groups */
  
}

label {
  display: block;
  margin-bottom: 0.5em; /* Adds space between the label and the input field */
  font-weight: bold; /* Optional: Makes the label bold for better readability */
 
}

input[type="text"], input[type="number"], textarea {
  width: 100%; /* Ensures the input field takes up the full width of the form */
  padding: 8px; /* Adds padding inside the input field */
  box-sizing: border-box; /* Ensures padding doesn’t affect total width */
  margin-bottom: 1em; /* Adds space between input fields */
  border: 1px solid #ccc; /* Adds a visible light grey border around the input field */
  border-radius: 4px; /* Optional: Adds rounded corners to the input fields */
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>