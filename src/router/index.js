import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Welcome from "../views/Welcome.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import RecipesIndex from "../views/RecipesIndex.vue";
import RecipesShow from "../views/RecipesShow.vue";
import RecipesNew from "../views/RecipesNew.vue";
import RecipesEdit from "../views/RecipesEdit.vue";
import BeersIndex from "../views/BeersIndex.vue";
import BeersShow from "../views/BeersShow.vue";
import BeersNew from "../views/BeersNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/recipes", name: "RecipesIndex", component: RecipesIndex },
  { path: "/recipes/new", name: "RecipesNew", component: RecipesNew },
  { path: "/recipes/:id", name: "RecipesShow", component: RecipesShow },
  { path: "/recipes/:id/edit", name: "RecipesEdit", component: RecipesEdit },
  { path: "/beers", name: "BeersIndex", component: BeersIndex },
  { path: "/beers/new", name: "BeersNew", component: BeersNew },
  { path: "/beers/:id", name: "BeersShow", component: BeersShow },
  { path: "/welcome", name: "welcome", component: Welcome },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
