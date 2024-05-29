import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/Home.vue';

// 创建路由规则
const routes = [{ path: '/', component: Home }];

// 创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
