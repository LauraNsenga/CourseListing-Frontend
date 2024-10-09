<template>
  <div class="full-screen">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div class="container-fluid">
        <router-link :to="{ name: 'courses' }" class="navbar-brand d-flex align-items-center">
          <img src="../src/assets/logo.png" alt="Logo" class="navbar-logo" />
          <span class="h5 mb-0">{{ title }}</span>
        </router-link>

        
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
    <div class="content-container container-fluid flex-grow-1">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Course List App",
    };
  },
};
</script>

<style scoped>
.full-screen {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  z-index: 1000;
  width: 100%; /* Full width for navbar */
  position: relative; /* Maintain flow */
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-logo {
  height: 60px; /* Adjust height */
  max-width: 100px; /* Limit max width */
  margin-right: 10px; /* Space between logo and title */
  transition: transform 0.3s ease; /* Add transition for hover effect */
}

.custom-navbar {
  background-color: hwb(341 5% 42%); /* Replace with your desired red color */
}

.navbar-logo:hover {
  transform: scale(1.05); /* Scale up on hover */
}

.nav-link {
  font-size: 1rem;
  display: flex;
  align-items: center;
}

.nav-link i {
  margin-right: 5px;
}

.content-container {
  flex-grow: 1;
  overflow: auto;
  max-width: 1200px; /* Optional: Constrain content width */
  margin: 0 auto; /* Center content */
}

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid layout */
  gap: 10px; /* Space between course items */
  padding: 20px;
}

.course-item {
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
