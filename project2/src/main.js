import './assets/main.css'
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";
import 'vuetify/styles'; // Import Vuetify styles
import { createVuetify } from 'vuetify'; // Import createVuetify function
import '@mdi/font/css/materialdesignicons.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a Vuetify instance
const vuetify = createVuetify();

const app = createApp(App);

// Use the router and Vuetify plugins
app.use(router);
app.use(vuetify);

// Mount the app
app.mount("#app");
