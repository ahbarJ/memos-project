const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/PageHome.vue") },
      { path: "/about", component: () => import("src/pages/PageAbout.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/signup",
    component: () => import("pages/SignUp_page.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
