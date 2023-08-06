import { defineStore } from 'pinia';
import { handleAllBreadcrumbList, handleFlatMenuList } from '@/utils';
import { getAuthMenuList } from '@/api/modules/login';

export interface MetaProps {
  title: string;
  icon?: string;
  hidden?: boolean;
  cache?: boolean;
  affix?: boolean;
  frameSrc?: string;
  keepAlive?: boolean;
}

export interface MenuItem {
  path: string;
  name?: string;
  component?: string | (() => Promise<unknown>);
  redirect?: string;
  meta: MetaProps;
  children?: MenuItem[];
}

export interface MenuState {
  menuList: MenuItem[];
  authMenuList: MenuItem[];
}

export const useMenuStore = defineStore({
  id: 'menu',
  state: (): MenuState => ({
    menuList: [],
    authMenuList: []
  }),
  getters: {
    getMenuList: (state) => state.menuList,
    getAuthMenuList: (state) => state.authMenuList,
    getFlatAuthMenuList: (state) => handleFlatMenuList(state.authMenuList),
    getBreadcrumbList: (state) => {
      return handleAllBreadcrumbList(state.authMenuList);
    }
  },
  actions: {
    setMenuList(menuList: MenuItem[]): void {
      this.menuList = menuList;
    },
    async setAuthMenuList() {
      const { data } = await getAuthMenuList();
      this.authMenuList = data;
    }
  }
});
