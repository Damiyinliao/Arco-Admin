import type { Router } from 'vue-router';
import NProgress from '@/plugin/nprogress';
import { MenuItem, useMenuStore } from '@/store/modules/menu';
import { routes } from '@/router/routes';

/** 路由守卫 */
export default function setupPermissionGuard(router: Router) {
  /**
   * @description 路由跳转前
   */
  router.beforeEach(async (to, from, next) => {
    const menuStore = useMenuStore();

    NProgress.start();
    menuStore.setMenuList(routes as unknown as MenuItem[]);
    next();
  });
  /**
   * @description 路由跳转错误
   * */
  router.onError((error) => {
    NProgress.done();
    console.warn('路由错误', error.message);
  });

  /**
   * @description 路由跳转结束
   * */
  router.afterEach(() => {
    NProgress.done();
  });
}
