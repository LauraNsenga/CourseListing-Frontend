<!-- src/views/AddCourse.vue -->
<template>
  <div class="container my-4">
    <h1>Add Course</h1>
    <form @submit.prevent="saveCourse">
      <div class="mb-3">
        <label for="coursename" class="form-label">Course Name*</label>
        <input type="text" class="form-control" id="coursename" v-model="course.coursename" required />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Course Description*</label>
        <textarea class="form-control" id="description" v-model="course.description" required></textarea>
      </div>
      <div class="mb-3">
        <label for="dept" class="form-label">Department*</label>
        <input type="text" class="form-control" id="dept" v-model="course.dept" required />
      </div>
      <div class="mb-3">
        <label for="duration" class="form-label">Course Duration (in weeks)*</label>
        <input type="number" class="form-control" id="duration" v-model.number="course.duration" min="1" required />
      </div>
      <div class="mb-3">
        <label for="startDate" class="form-label">Start Date*</label>
        <input type="date" class="form-control" id="startDate" v-model="course.startDate" required />
      </div>
      <div class="mb-3">
        <label for="instructor" class="form-label">Instructor Name*</label>
        <input type="text" class="form-control" id="instructor" v-model="course.instructor" required />
      </div>
      <div class="mb-3">
        <label for="prerequisites" class="form-label">Course Prerequisites</label>
        <input type="text" class="form-control" id="prerequisites" v-model="course.prerequisites" />
      </div>
      <div class="d-flex justify-content-between">
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-secondary" @click="resetForm">Reset</button>
        <button type="button" class="btn btn-danger" @click="cancelAddition">Cancel</button>
      </div>
    </form>
    <div v-if="message" :class="['alert', messageType === 'success' ? 'alert-success' : 'alert-danger', 'mt-3']" role="alert">
      {{ message }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import courseService from '../services/courseServices'; // Assume this service handles API calls

export default {
  name: 'AddCourse',
  setup() {
    const router = useRouter();
    const course = ref({
      coursename: '',
      description: '',
      dept: '',
      duration: null,
      startDate: '',
      instructor: '',
      prerequisites: ''
    });
    const message = ref('');
    const messageType = ref('');

    const saveCourse = async () => {
      if (validateForm()) {
        try {
          await courseService.addCourse(course.value);
          message.value = 'Course added successfully!';
          messageType.value = 'success';
          setTimeout(() => {
            router.push({ name: 'CourseList' });
          }, 2000);
        } catch (error) {
          message.value = 'Error adding course. Please try again.';
          messageType.value = 'error';
        }
      }
    };

    const validateForm = () => {
      for (const [key, value] of Object.entries(course.value)) {
        if (key !== 'prerequisites' && !value) {
          message.value = `Please fill in the ${key} field.`;
          messageType.value = 'error';
          return false;
        }
      }
      return true;
    };

    const resetForm = () => {
      Object.keys(course.value).forEach(key => {
        course.value[key] = '';
      });
      course.value.duration = null;
      message.value = '';
    };

    const cancelAddition = () => {
      router.push({ name: 'course' });
    };

    return {
      course,
      message,
      messageType,
      saveCourse,
      resetForm,
      cancelAddition
    };
  }
};
</script>