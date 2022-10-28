import { createApp } from "vue";
import App from "./App.vue";

import MyCustomParagraph from "./components/CustomParagraph.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.component("MyCustomParagraph", MyCustomParagraph);

app.use(router);

app.mount("#app");
