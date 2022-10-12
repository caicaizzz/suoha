import Vue from "vue";
import VueRouter from "vue-router";
//import LocalCache from "@/utils/cache";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/account",
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/Login/index.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

// router.beforeEach((to) => {
//   if (to.path != "/account") {
//     const token = LocalCache.getCache("token");
//     if (!token) return "/account";
//   }
// });

export default router;
