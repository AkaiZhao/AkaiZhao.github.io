import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: Home
    },
    {
      path: '/work',
      name: 'WORK',
      component: () => import('./views/Work.vue')
    }
  ]
});
