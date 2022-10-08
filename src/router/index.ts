import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      name: "home",
      component: Dashboard,
      meta:{
        title:"Home"
      }
    },
    {
      path: "/editpage/:id",
      name: "EditPage",
      component: () => import("@/views/EditPage.vue"),
      meta:{
        title:"EditPage"
      }
    },
    {
      path: "/create",
      name: "Create",
      component: () => import("@/views/Create.vue"),
      meta:{
        title:"Create"
      }
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: () => import("@/views/PageNotFound.vue"),
      meta:{
        title:"NotFound"
      }
    },
  ],
});

router.beforeEach((to,from,next)=>{
  document.title=`${to.meta.title}`;
  next()
})

export default router;

