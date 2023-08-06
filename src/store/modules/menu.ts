import { defineStore } from 'pinia';
import { getAllBreadcrumbList } from '@/utils';

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
}

export const useMenuStore = defineStore({
  id: 'menu',
  state: (): MenuState => ({
    menuList: []
  }),
  getters: {
    getMenuList(): MenuItem[] {
      return this.menuList;
    },
    getBreadcrumbList(state) {
      return getAllBreadcrumbList(state.menuList);
    }
  },
  actions: {
    setMenuList(menuList: MenuItem[]): void {
      this.menuList = menuList;
    }
  }
});
