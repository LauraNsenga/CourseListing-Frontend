<script setup>
import CourseServices from "../sevices/courseServices"; // Update with your course services
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref([]);
const message = ref("");

const editCourse = (course) => {
  router.push({ name: "editCourse", params: { id: course.id } }); // Ensure 'id' matches your API
};

const viewCourse = (course) => {
  router.push({ name: "viewCourse", params: { id: course.id } });
};

const deleteCourse = (course) => {
  CourseServices.delete(course.id) // Use 'id' based on your service
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
      courses.value = response.data; // Ensure this aligns with your API response structure
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

retrieveCourses();
</script>

<template>
  <div class="container my-4">
    <div class="card">
      <div class="card-header">
        <h3>Courses</h3>
      </div>
      <div class="card-body">
        <p><b>{{ message }}</b></p>

        <table class="table table-striped">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in courses" :key="item.id"> <!-- Use 'id' from your service -->
              <td>{{ item.coursename }}</td>
              <td>{{ item.dept }}</td>
              <td>
                <div class="d-flex align-items-center">
                  <button class="btn btn-light mx-2" @click="editCourse(item)">
                    <i class="mdi mdi-pencil"></i>&nbsp;Edit
                  </button>
                  <button class="btn btn-light mx-2" @click="viewCourse(item)">
                    <i class="mdi mdi-format-list-bulleted-type"></i>&nbsp;View
                  </button>
                  <button class="btn btn-light mx-2" @click="deleteCourse(item)">
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