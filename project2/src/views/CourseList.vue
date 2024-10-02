<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CourseServices from "../services/courseServices"; // Assuming it's already correctly linked

const router = useRouter();
const courses = ref([]);
const message = ref("");
const showDeleteConfirm = ref(false); // Control for the confirmation dialog
const courseToDelete = ref(null); // Keep track of the course to delete

// Function to edit course
const editCourse = (course) => {
  router.push({ name: "editCourse", params: { id: course.id } }); // Ensure 'id' matches your API
};

// Function to view course
const viewCourse = (course) => {
  router.push({ name: "viewCourse", params: { id: course.id } });
};

// Confirm deletion
const confirmDelete = (course) => {
  showDeleteConfirm.value = true; // Open confirmation dialog
  courseToDelete.value = course; // Store the selected course
};

// Proceed to delete the course
const deleteCourse = () => {
  if (courseToDelete.value) {
    CourseServices.delete(courseToDelete.value.id)
      .then(() => {
        retrieveCourses(); // Refresh the course list after deletion
        message.value = `Course "${courseToDelete.value.coursename}" deleted successfully!`;
        showDeleteConfirm.value = false; // Close confirmation dialog
      })
      .catch((e) => {
        message.value = e.response.data.message;
      });
  }
};

// Cancel deletion
const cancelDelete = () => {
  showDeleteConfirm.value = false;
  courseToDelete.value = null;
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
                  <button class="btn btn-light mx-2" @click="confirmDelete(item)">
                    <i class="mdi mdi-trash-can"></i>&nbsp;Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteConfirm" class="modal show" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete Course</h5>
            <button type="button" class="btn-close" @click="cancelDelete"></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete the course "{{ courseToDelete?.coursename }}"?</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="cancelDelete">Cancel</button>
            <button class="btn btn-danger" @click="deleteCourse">Delete</button>
          </div>
        </div>
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

.modal.show {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-dialog {
  max-width: 500px;
}

.modal-content {
  padding: 1.5rem;
}
</style>
