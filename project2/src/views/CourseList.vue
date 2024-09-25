<script setup>
import CourseServices from "../sevices/courseServices"; // Update with your course services
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref([]);
const message = ref("");

const editCourse = (course) => {
  router.push({ name: "editCourse", params: { id: course.courseId } });
};

const viewCourse = (course) => {
  router.push({ name: "viewCourse", params: { id: course.courseId } });
};

const deleteCourse = (course) => {
  CourseServices.delete(course.courseId)
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
  <div class="container my-4">
    <!-- Course Management Header -->
    <div class="card">
      <div class="card-header">
        <h3>Courses</h3>
      </div>
      <div class="card-body">
        <p><b>{{ message }}</b></p>

        <!-- Courses Table -->
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in courses" :key="item.courseId">
              <td>{{ item.coursename }}</td>
              <td>{{ item.dept }}</td>
              <td>
                <div class="d-flex align-items-center">
                  <!-- Edit Button -->
                  <button class="btn btn-light mx-2 d-flex align-items-center" @click="editCourse(item)">
                    <i class="mdi mdi-pencil"></i>&nbsp;Edit
                  </button>
                  <!-- View Button -->
                  <button class="btn btn-light mx-2 d-flex align-items-center" @click="viewCourse(item)">
                    <i class="mdi mdi-format-list-bulleted-type"></i>&nbsp;View
                  </button>
                  <!-- Delete Button -->
                  <button class="btn btn-light mx-2 d-flex align-items-center" @click="deleteCourse(item)">
                    <i class="mdi mdi-trash-can"></i>&nbsp;Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table th, .table td {
  vertical-align: middle;
}

.d-flex {
  display: flex;
  align-items: center;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.btn {
  display: flex;
  align-items: center;
}
</style>
