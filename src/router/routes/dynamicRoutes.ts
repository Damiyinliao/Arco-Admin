import router from '@/router';
import { RouteRecordRaw } from 'vue-router';
import { useMenuStore } from '@/store/modules/menu';
import { Message } from '@arco-design/web-vue';

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob('@/views/**/*.vue');

/**
 * @description 初始化动态路由
 */
export const initDynamicRoutes = async () => {
  const menuStore = useMenuStore();
  try {
    await menuStore.setAuthMenuList();
    if (!menuStore.getAuthMenuList.length) {
      Message.info({
        content: '路有没有添加成功'
      });
    }
    // 将扁平化之后的所有路由有component添加上路由路径
    menuStore.getFlatAuthMenuList.forEach((item) => {
      item.children && delete item.children;
      if (item.component && typeof item.component == 'string') {
        item.component = modules['/src/views' + item.component + '.vue'];
      }
      // 统一为Layout页面添加子路由
      router.addRoute('layout', item as unknown as RouteRecordRaw);
    });
  } catch (error) {
    Message.info('错误');
  }
};
