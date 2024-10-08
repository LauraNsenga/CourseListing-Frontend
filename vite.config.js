
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import dns from "dns";
dns.setDefaultResultOrder("verbatim");

export default () => {
  const baseURL =
    process.env.APP_ENV === "development" ? "/" : "/tutorial-frontend-vue3/";

  return defineConfig({
    plugins: [vue()],

    server: {
      host: "localhost",
      port: 8081,
    },

    base: baseURL,
  });
};
