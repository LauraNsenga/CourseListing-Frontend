import { createRouter, createWebHistory } from "vue-router";
import CourseList from "../views/CourseList.vue";
import AddCoursePage from "../views/AddCoursePage.vue";
import EditCourse from "../views/EditCourse.vue";
import SaveCourse from "../views/SaveCourse.vue";
import ViewCourse from "../views/ViewCourse.vue";  // Import ViewCourse

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "courses",
      component: CourseList,  // Default view will be the course listing
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
      component: SaveCourse,
    },
    {
      path: "/view/:id", // Route for viewing a course
      name: "viewCourse",
      component: ViewCourse,  // Use ViewCourse.vue for displaying course details
    },
    {
      path: "/view/:",
      name: "viewCourse",
      component: ViewCourse,
    }
    
  ],
});

export default router;