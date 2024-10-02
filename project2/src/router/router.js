import { createRouter, createWebHistory } from "vue-router";
import CourseList from "../views/CourseList.vue";
import AddCoursePage from "../views/AddCoursePage.vue";
import EditCourse from "../views/EditCourse.vue";
import SaveCourse from "../views/SaveCourse.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "courses",
      component: CourseList, // Default view will be the course listing
    },
    {
      path: "/add",
      name: "addCourse",
      component: AddCoursePage,
    },
    {
      path: "/edit/:id", // Route for editing a course
      name: "editCourse",
      component: EditCourse,
    },
    {
      path: "/save", // Route for saving a course
      name: "saveCourse",
      component: SaveCourse, // Use SaveCourse.vue for saving functionality
    },
    
  ],
});

export default router;
