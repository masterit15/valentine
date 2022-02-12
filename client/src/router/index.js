import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      requiresAuth: true
    }
  },
  {
    path: '/auth',
    name: 'Авторизация',
    component: () => import('../views/Auth.vue'),
    meta: {
      layout: 'empty',
      requiresGuest: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    if (!localStorage.getItem('user')){
      // делаем редирект на страницу авторизации
      next('/auth')
    }else{
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)){
    if (localStorage.getItem('user')) {
      // делаем редирект на главную страницу
      next('/')
    } else {
      next()
    }
  }else{
    next()
  }
})
export default router
