import { RouteRecordRaw } from 'vue-router';

export const DEFAULT_LAYOUT = () => import('@/layouts/Layout.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    redirect: '/home/index',
    component: DEFAULT_LAYOUT,
    children: [
      {
        path: '/home/index',
        name: 'One',
        meta: {
          title: '首页1',
          icon: 'icon-home'
        },
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DEFAULT_LAYOUT,
    meta: {
      title: '仪表盘',
      icon: 'icon-dashboard'
    },
    children: [
      {
        path: '/dashboard/workbench',
        name: 'Workbench',
        meta: {
          title: '工作台',
          icon: 'icon-desktop'
        },
        component: () => import('@/views/dashboard/WorkBench.vue')
      },
      {
        path: '/dashboard/analysis',
        name: 'Analysis',
        meta: {
          title: '分析页'
        },
        component: () => import('@/views/dashboard/Analysis.vue')
      }
    ]
  },
  {
    path: '/nav',
    name: 'Nav',
    component: DEFAULT_LAYOUT,
    meta: {
      title: '导航'
    },
    children: [
      {
        path: '/nav/menu',
        name: 'Menu',
        meta: {
          title: '菜单'
        },
        component: () => import('@/views/nav/Menu.vue')
      },
      {
        path: '/nav/dropdown',
        name: 'Dropdown',
        meta: {
          title: '下拉菜单'
        },
        redirect: '/nav/dropdown/one',
        children: [
          {
            path: '/nav/dropdown/one',
            name: 'DropdownOne',
            meta: {
              title: '下拉菜单1'
            },
            component: () => import('@/views/nav/dropdown/DropdownOne.vue')
          },
          {
            path: '/nav/dropdown/two',
            name: 'DropdownTwo',
            meta: {
              title: '下拉菜单2'
            },
            component: () => import('@/views/nav/dropdown/DropdownTwo.vue')
          }
        ]
      }
    ]
  }
];
