import { createRouter, createWebHistory } from "vue-router";
import homeRoute from "./home";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeRoute,
    {
      path: "/",
      name: "landing",
      component: () => import("../pages/Home.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("../pages/Todo.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../pages/Login.vue"),
    },
  ],
});

export default router;
