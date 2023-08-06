import { RouteRecordRaw } from 'vue-router';

export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/ayout',
    name: 'layout',
    component: () => import('@/layouts/Layout.vue'),
    redirect: '/home',
    children: []
  }
];
