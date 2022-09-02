import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    alias: '/home',
    name: "home",
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/contract',
    name: 'contract',
    component: () => import('../views/Contract.vue'),
  },
  {
    path: '/contract/product',
    name: 'contract product',
    component: () => import('../views/Contract-Product.vue'),
  },
  {
    path: '/marks',
    name: 'marks',
    component: () => import('../views/Marks.vue'),
  },
  {
    path: '/marks/product',
    name: 'marks product',
    component: () => import('../views/Marks-Product.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/Blog.vue'),
  },
  {
    path: '/blog/more',
    name: 'blog more',
    component: () => import('../views/Blog-More.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/policy',
    name: 'policy',
    component: () => import('../views/Policy.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach(function (to, from, next) { 
  window.scrollTo(0, 0);
  next();
});

export default router
