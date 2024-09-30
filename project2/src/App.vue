<template>
  <div>
    <!-- Navbar with Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
       
        <router-link :to="{ name: 'courses' }" class="navbar-brand d-flex align-items-center">
          <img src="../src/assets/logo.png" alt="Logo" height="60" width="100" class="me-2" />
          <span class="h5 mb-0">{{ title }}</span>
        </router-link>

        <!-- Toggle button for mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'courses' }">
                <i class="mdi mdi-format-list-bulleted"></i> List Courses
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'addCourse' }">
                <i class="mdi mdi-plus-box"></i> Add Course
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main content area -->
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Course Listing App",
    };
  },
};
</script>

<style scoped>
.navbar-brand img {
  max-height: 100px;
  max-width: 100px;
}

.nav-link {
  font-size: 1rem;
  display: flex;
  align-items: center;
}

.nav-link i {
  margin-right: 5px;
}

.container {
  padding-top: 20px;
}
</style>
