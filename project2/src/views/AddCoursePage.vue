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
      router.push({ name: 'courses' });
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