import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../components/AppLayout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { layout: AppLayout },
    component: () => import("../views/DashboardViews/Dashboard.vue"),
  },
  {
    path: "/board/:boardId",
    name: "board",
    meta: { layout: AppLayout },
    component: () => import("../views/BoardViews/Board.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
