import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";



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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
     import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
     import(/* webpackChunkName: "register" */ "../views/Register.vue")

  },
  {
    path: "/page",
    name: "Page",
    component: () =>
     import(/* webpackChunkName: "Page" */ "../views/Page.vue")
  },
  {
    path: "/chnage",
    name: "Change",
    component: () =>
     import(/* webpackChunkName: "login" */ "../views/Change.vue")
  }
  
    
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
