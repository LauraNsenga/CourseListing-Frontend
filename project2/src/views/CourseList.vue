<script setup>
import CourseServices from "../services/courseServices"; // Update with your course services
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref([]);
const message = ref("");

const editCourse = (course) => {
  router.push({ name: "editCourse", params: { id: course.id } });
};

const viewCourse = (course) => {
  router.push({ name: "viewCourse", params: { id: course.id } });
};

const deleteCourse = (course) => {
  CourseServices.delete(course.id)
    .then(() => {
      retrieveCourses();
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

const retrieveCourses = () => {
  CourseServices.getAll()
    .then((response) => {
      courses.value = response.data;
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

retrieveCourses();
</script>

<template>
  <div class="full-width-container">
    <div class="card-header">
      <h3>Courses</h3>
    </div>
    <div class="card-body">
      <p><b>{{ message }}</b></p>

      <!-- Loop through courses and display them in a full-width, borderless layout -->
      <div v-for="item in courses" :key="item.id" class="row py-2 align-items-center">
        <div class="col-3">
          <strong>{{ item.coursename }}</strong>
        </div>
        <div class="col-3">
          {{ item.dept }}
        </div>
        <div class="col-6 d-flex justify-content-end">
          <button class="btn btn-outline-secondary" @click="editCourse(item)">
            <i class="mdi mdi-pencil"></i>&nbsp;Edit
          </button>
          <button class="btn btn-outline-info" @click="viewCourse(item)">
            <i class="mdi mdi-format-list-bulleted-type"></i>&nbsp;View
          </button>
          <button class="btn btn-outline-danger" @click="deleteCourse(item)">
          <i class="mdi mdi-trash-can"></i>&nbsp;Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.full-width-container {
  width: 100%; /* Full viewport width */
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

.col-3, .col-6 {
  padding: 10px 0; /* Adds spacing between the columns */
}

.btn {
  display: flex;
  align-items: center;
  transition: all 0.2s ease; /* Smooth transition for hover effects */

}
.btn:hover {
  transform: scale(1.05); /* Slightly enlarges button on hover */
}

.text-danger {
  text-align: center; /* Center align error messages */
}
.course-details {
  flex: 1; /* Take up available space */
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>






