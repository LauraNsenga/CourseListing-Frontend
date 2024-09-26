<!-- <template>
    <div class="add-course-container">
      <h2>Add New Course</h2>
      <form @submit.prevent="submitCourse">
        <div class="form-group">
          <label for="courseName">Course Name:</label>
          <input type="text" id="courseName" v-model="courseName" required />
        </div>
  
        <div class="form-group">
          <label for="courseDescription">Description:</label>
          <textarea id="courseDescription" v-model="courseDescription" required></textarea>
        </div>
  
        <div class="form-group">
          <label for="courseCredits">Credits:</label>
          <input type="number" id="courseCredits" v-model="courseCredits" required />
        </div>
  
        <button type="submit">Add Course</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        courseName: "",
        courseDescription: "",
        courseCredits: null,
      };
    },
    methods: {
        async submitCourse() {
            const course = {
            name: this.courseName,
            description: this.courseDescription,
            credits: this.courseCredits,
            };
    
    // Send the course data to the backend
    try {
      await axios.post('https://github.com/LauraNsenga/CourseListing-Backend', course); // remplace with your actaul backend
      // Handle success, e.g., clear form or show a message
      this.courseName = '';
      this.courseDescription = '';
      this.courseCredits = null;
    } catch (error) {
      console.error('Failed to add course:', error);
    }

  
        this.$emit("add-course", course); // je reste avec cette ligne?
  
        // Reset form
        this.courseName = "";
        this.courseDescription = "";
        this.courseCredits = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .add-course-container {
    max-width: 500px;
    margin: auto;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  </style>
   -->

   <template>
    <div class="course-form">
      <h2>Create a New Course</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="courseName">Course Name</label>
          <input type="text" id="courseName" v-model="course.name" required />
        </div>
  
        <div class="form-group">
          <label for="courseDescription">Course Description</label>
          <textarea id="courseDescription" v-model="course.description" required></textarea>
        </div>
  
        <div class="form-group">
          <label for="courseCredits">Credits</label>
          <input type="number" id="courseCredits" v-model="course.credits" required />
        </div>
  
        <button type="submit">Create Course</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        course: {
          name: "",
          description: "",
          credits: null,
        },
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await fetch("/api/courses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.course),
          });
  
          if (response.ok) {
            alert("Course created successfully!");
            this.course = { name: "", description: "", credits: null };
          } else {
            alert("Failed to create course.");
          }
        } catch (error) {
          console.error("Error creating course:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .course-form {
    max-width: 600px;
    margin: 0 auto;
  }
  .form-group {
    margin-bottom: 1em;
  }
  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  </style>
  