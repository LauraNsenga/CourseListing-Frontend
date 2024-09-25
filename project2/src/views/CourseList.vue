<script setup>
import CourseServices from "../sevices/courseServices"; // Update with your course services
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const courses = ref([]);
const message = ref("Search, Edit or Delete Courses");

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
      console.log('here')
    })
    .catch((e) => {
      message.value = e.response.data.message;
    });
};

retrieveCourses();
</script>

<template>
  <div>
    <v-container>
      <!-- Course Management Header -->
      <v-card>
        <v-card-title> Courses </v-card-title>
        <v-card-text>
          <b>{{ message }}</b>
        </v-card-text>
        <!-- Courses Table -->
        <v-table>
          <tbody>
            <tr v-for="item in courses" :key="item.courseId">
              <td>{{ item.coursenum }}</td>
              <td>{{ item.coursename }}</td>
              <td>{{ item.dept }}</td>
              <td>{{ item.hours }}</td>
              <td>{{ item.level }}</td>
              <td>
                <div class="d-flex align-items-center">
  <button class="btn btn-light mx-2 d-flex align-items-center" @click="editCourse(item)">
    <i class="mdi mdi-pencil"></i>&nbsp;Edit
  </button>
  <button class="btn btn-light mx-2 d-flex align-items-center" @click="viewCourse(item)">
    <i class="mdi mdi-format-list-bulleted-type"></i>&nbsp;View
  </button>
  <button class="btn btn-danger mx-2 d-flex align-items-center" @click="deleteCourse(item)">
    <i class="mdi mdi-trash-can"></i>&nbsp;Delete
  </button>
</div>


              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>
  </div>
</template>
