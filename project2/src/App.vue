<template>
  <div class="full-screen">

    <!-- Navbar -->
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
  height: 100vh; /* Full height of the viewport */
  display: flex;
  flex-direction: column;
}

.navbar {
  z-index: 1000; /* Ensure navbar stays on top */
}

.navbar-brand img {
  max-height: 60px;
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

.container-fluid {
  padding-top: 20px;
}

.content-container {
  flex-grow: 1; /* Make the content area grow to fill remaining space */
  overflow: auto; /* Ensure scrollable content */
}
</style>

<template>
  <div class="full-screen">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
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
        <div id="navbarNav" class="collapse navbar-collapse">
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
  name: 'App',
  data() {
    return {
      title: 'Course List App'
    }
  }
}
</script>

<style scoped>
.full-screen {
  /* height: 100vh;  Full height of the viewport */
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: full-width-container#f8f9fa; /* Light gray background */
  padding: 0; /* Remove padding to extend full width */
}

.custom-navbar {
  background-color: hsl(341, 94%, 26%); /* Replace with your logo's red color */
}

.navbar {
  z-index: 1000; /* Ensure navbar stays on top */
  padding-left: 0; /* Remove left padding */
}

.navbar-brand img {
  max-height: 60px;
  max-width: 100px;
}

.nav-link {
  font-size: 1.1rem; /* Slightly larger font for better readability */
  display: flex;
  align-items: center;
  transition: background-color 0.3s; /* Smooth background change */
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Subtle hover effect */
}

.nav-link i {
  margin-right: 5px;
}

.content-container {
  flex-grow: 1; /* Make the content area grow to fill remaining space */
  overflow: auto; /* Ensure scrollable content */
  padding: 20px; /* Add padding to the content area */
}
</style>
