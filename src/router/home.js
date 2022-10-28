export default {
  path: "/home",
  name: "home",
  children: [
    {
      path: "/new-business",
      name: "home-new-busines",
      component: () => import("../pages/Blog.vue"),
    },
    {
      path: "/profile",
      name: "home-profile",
      component: () => import("../pages/Blog.vue"),
    },
    {
      path: "/news",
      name: "home-news",
      component: () => import("../pages/Blog.vue"),
    },
  ],
};
