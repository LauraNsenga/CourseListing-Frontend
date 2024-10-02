<!-- Inside CourseList.vue -->
<template>
  <div class="container-fluid full-width-container my-4">
    <!-- ... Existing code for displaying courses ... -->
    <div v-for="item in courses" :key="item.id" class="row py-2 align-items-center">
      <!-- ... Other columns ... -->
      <div class="col-6 d-flex justify-content-center">
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
    </div>
  </div>
</template>

<script setup>
// ... other imports
const deleteCourse = (course) => {
  router.push({ name: "deleteCourse", params: { id: course.id } }); // Navigate to DeleteCourse page
};
</script>
