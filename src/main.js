import { createApp } from "vue";
import App from "./App.vue";

import MyCustomParagraph from "./components/CustomParagraph.vue";

import "./assets/main.css";

const app = createApp(App);

app.component("MyCustomParagraph", MyCustomParagraph);

app.mount("#app");

// const app2 = createApp({});

// app2.component("MyCustomParagraph", MyCustomParagraph);

// app2.mount("#contoh");
