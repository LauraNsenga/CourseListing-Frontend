import { createRouter, createWebHistory } from "vue-router";

import CourseList from "../views/CourseList.vue";
import AddCoursePage from "../views/AddCoursePage.vue";

// import AddCourse from "./views/AddCourse.vue";
// import ViewCourse from "./views/ViewCourse.vue";
// import DeleteCourse from "./views/DeleteCourse.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "courses",
      component: CourseList,  // Default view will be the course listing

    },
     {

      path: "/",
       name: "addCourse",
       component: AddCoursePage,
     },

     
    
  ],
});

export default router;


