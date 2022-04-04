import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Countdown from "../views/Countdown.vue";
import Posts from "../views/Posts.vue";
import PostDetails from "../views/PostDetails.vue";
import Table from "../views/Table.vue";

// import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/countdown",
    name: "Countdown",
    component: Countdown,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/posts/:id",
    name: "PostsDetails",
    component: PostDetails,
    props: true,
  },
  {
    path: "/table",
    name: "Table",
    component: Table,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
