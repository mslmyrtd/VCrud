import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      name: "home",
      component: Dashboard,
    },
    {
      path: "/editpage/:id",
      name: "EditPage",

      component: () => import("@/views/EditPage.vue"),
    },
    {
      path: "/create",
      name: "Create",

      component: () => import("@/views/Create.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",

      component: () => import("@/views/PageNotFound.vue"),
    },
  ],
});

export default router;

// import.meta.env.BASE_URL
