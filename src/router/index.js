import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import AppLayout from "../components/AppLayout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    meta: { layout: AppLayout },
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
