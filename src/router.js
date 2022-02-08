import Vue from 'vue';
import {createRouter,createWebHashHistory} from 'vue-router';
import MyBlogLogin from './components/MyBlogLogin.vue'
import MyBlogMainpage from './components/MyBlogMainpage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MyBlogLogin
  },
  {
    path: '/main_page/:login',
    name: 'Main Page',
    props: true,
    component: MyBlogMainpage
  },
  {
    path: '/all_posts',
    name: 'All posts',
    component: MyBlogMainpage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
});

export default router