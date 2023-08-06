import { defineStore } from 'pinia';
import router from '@/router';

export interface TabItem {
  name: string;
  title: string;
  path: string;
  icon: string;
  // closable: boolean;
}

export interface TabsState {
  tabsList: TabItem[];
  activeTab: string;
}

export const useTabsStore = defineStore({
  id: 'tabs',
  state: (): TabsState => ({
    tabsList: [],
    activeTab: ''
  }),
  getters: {
    getTabsList: (state) => state.tabsList,
    getActiveTab: (state) => state.activeTab
  },
  actions: {
    // 添加标签菜单
    async addTab(tabItem: TabItem) {
      console.log('tabItem', tabItem);
      if (this.tabsList.every((item) => item.path !== tabItem.path)) {
        this.tabsList.push(tabItem);
      }
    },
    // 移除标签菜单
    async removeTab(tabPath: string, isCurrent: boolean) {
      const tabsMenuList = this.tabsList;
      // 如果是当前的标签菜单被删除之后就跳转到下一个标签菜单，没有下一个标签菜单就跳转到上一个
      if (isCurrent) {
        tabsMenuList.forEach((item, index) => {
          if (item.path !== tabPath) return;
          const nextTab = tabsMenuList[index + 1] || tabsMenuList[index - 1];
          if (!nextTab) return;
          router.push(nextTab.path);
        });
      }
      this.tabsList = tabsMenuList.filter((item) => item.path !== tabPath);
    }
  }
});
