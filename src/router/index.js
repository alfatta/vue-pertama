import { createRouter, createWebHistory } from "vue-router";
import homeRoute from "./home";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    homeRoute,
    {
      path: "/blog",
      name: "blog",
      component: () => import("../pages/Blog.vue"),
    },
    {
      path: "/blog/new",
      name: "blog-insert",
      component: () => import("../pages/BlogPost.vue"),
      meta: {
        type: "insert",
      },
    },
    {
      path: "/blog/:kode",
      name: "blog-detail",
      component: () => import("../pages/BlogDetail.vue"),
    },
    {
      path: "/blog/:kode/edit",
      name: "blog-edit",
      component: () => import("../pages/BlogPost.vue"),
      meta: {
        type: "edit",
      },
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("../pages/Todo.vue"),
    },
    {
      path: "/",
      name: "login",
      component: () => import("../pages/Login.vue"),
    },
  ],
});

export default router;
