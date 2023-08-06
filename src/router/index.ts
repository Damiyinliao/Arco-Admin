import { createRouter, createWebHistory } from 'vue-router';
import { staticRoutes } from './routes/staticRoutes';
import { routes } from './routes';

import setupGuard from './guard'; // 路由守卫

import type { App } from 'vue';

/**
 * @description: 创建路由实例
 */
const router = createRouter({
  // history: createWebHashHistory(), // hash模式 ‘#’
  history: createWebHistory(), // history模式
  routes: [...staticRoutes, ...routes], // 路由表
  strict: true, // 是否应该禁止尾部斜杠。默认为假
  scrollBehavior: () => ({ left: 0, top: 0 }) // 滚动行为
});

/**
 * @description: 设置路由
 * @param app
 */
export function setupRouter(app: App<Element>) {
  setupGuard(router);
  app.use(router);
}

export default router;
