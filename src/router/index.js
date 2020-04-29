import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout/Layout";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";

Vue.use(VueRouter);

const appRoutes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/cursos",
    name: "Cursos",
    component: () => import("../views/Cursos/Lista.vue"),
  },
];

const routes = [
  {
    path: "",
    component: Layout,
    children: appRoutes,
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
