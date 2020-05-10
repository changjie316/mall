import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from "views/cart/Cart";
import Profile from "views/profile/Profile";
import Home from "views/home/Home";
import Category from "views/category/Category";


Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    path:"/cart",
    component:Cart
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/home",
    component:Home
  },{
    path:"/category",
    component:Category
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
