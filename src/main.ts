import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./assets/styles/tailwind.css";
import { messages } from "./i18n/messages";

const i18n = createI18n({
  locale: navigator.language.substr(0, 2),
  fallbackLocale: "en",
  messages
});

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .mount("#app");
