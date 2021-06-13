import Vue from 'vue'
import VueRouter from 'vue-router'
// Rutas 
import Home from '../views/Home.vue';
import Youtube from '../views/Youtube.vue';
import Facebook from '../views/Facebook.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube
  },
  {
    path: '/facebook',
    name: 'Facebook',
    component: Facebook
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
