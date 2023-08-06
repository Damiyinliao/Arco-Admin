import { defineStore } from 'pinia';

export type LayoutType = 'vertical' | 'classic' | 'transverse' | 'columns';

export type AssemblySizeType = 'large' | 'default' | 'small';

export type LanguageType = 'zh' | 'en' | null;

export interface AppState {
  layout: LayoutType;
  assemblySize: AssemblySizeType;
  language: LanguageType;
  maximize: boolean;
  primary: string;
  isDark: boolean;
  isGrey: boolean;
  isWeak: boolean;
  asideInverted: boolean;
  isCollapse: boolean;
  breadcrumb: boolean;
  breadcrumbIcon: boolean;
  tabs: boolean;
  tabsIcon: boolean;
  footer: boolean;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    layout: 'vertical',
    assemblySize: 'default',
    language: null,
    maximize: false,
    primary: '#1890ff',
    isDark: false,
    isGrey: false,
    isWeak: false,
    asideInverted: false,
    isCollapse: false,
    breadcrumb: true,
    breadcrumbIcon: true,
    tabs: true,
    tabsIcon: true,
    footer: true
  }),
  getters: {
    doubleCount(): number {
      return 2;
    }
  },
  actions: {
    increment() {}
  }
});
