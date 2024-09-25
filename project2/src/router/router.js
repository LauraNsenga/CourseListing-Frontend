import { createRouter, createWebHistory } from "vue-router";

import CourseList from "../views/CourseList.vue";
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
    // {
    //   path: "/edit-course/:id",
    //   name: "editCourse",
    //   component: EditCourse,
    //   props: true,  // Pass the course ID as a prop
    // },
    // {
    //   path: "/add-course",
    //   name: "addCourse",
    //   component: AddCourse,
    // },
    // {
    //   path: "/view-course/:id",
    //   name: "viewCourse",
    //   component: ViewCourse,
    //   props: true,  // Pass the course ID as a prop
    // },
    // {
    //   path: "/delete-course/:id",
    //   name: "deleteCourse",
    //   component: DeleteCourse,
    //   props: true,  // Pass the course ID as a prop
    // },
  ],
});

export default router;
