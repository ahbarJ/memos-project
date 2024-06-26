const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/pages/PageHome.vue"),
        name: "Home",
      },
      {
        path: "/about",
        component: () => import("src/pages/PageAbout.vue"),
        name: "About",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/signup",
    component: () => import("pages/SignUp_page.vue"),
  },

  {
    path: "/signin",
    component: () => import("pages/SignIn_page.vue"),
  },

  {
    path: "/verify",
    component: () => import("pages/VerificationPage.vue"),
  },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
