import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: () =>
    import( "../views/welcome.vue"),
    meta:{
      show:false
    }
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/login.vue"),
      meta:{
        show:false
      }
  },
  {
    path: "/home",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/Home.vue"),
      meta:{
        show:true
      }
  },
  {
    path: "/headline",
    name: "Headline",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/headline.vue"),
      meta:{
        show:true
      }
  }
];

const router = new VueRouter({
  routes
});

export default router;
