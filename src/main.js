import { createApp } from "vue";

import { createPinia } from "pinia";

import App from "./App.vue";

import MyCustomParagraph from "./components/CustomParagraph.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.component("MyCustomParagraph", MyCustomParagraph);

app.use(router);

const pinia = createPinia();

app.use(pinia);

app.mount("#app");
