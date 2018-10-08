import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Books from './components/Books'
import Authors from './components/Authors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/authors',
      name: 'authors',
      component: Authors
    },
  ]
})
