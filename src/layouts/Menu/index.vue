<template>
  <a-menu
    v-model="openKeys"
    :selected-keys="[activeMenu]"
    :auto-open-selected="true"
    mode="vertical"
    @menu-item-click="onClickMenuItem"
  >
    <SubMenu :menu-list="menuList" />
  </a-menu>
</template>
<script lang="ts" name="Menu" setup>
import SubMenu from './SubMenu.vue';
import { Message } from '@arco-design/web-vue';
import { useMenuStore } from '@/store/modules/menu';

const menuStore = useMenuStore();

// const selectedKeys = ref();
const openKeys = ref();

const menuList = computed(() => menuStore.menuList);

const route = useRoute();

// 当前正在浏览的菜单即页面路径
const activeMenu = computed(() => {
  const { path, meta } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});

watch(
  () => route.fullPath,
  () => {
    openKeys.value = [];
    const currentPath = route.path;
    let breadcrumbData = menuStore.getBreadcrumbList[currentPath] ?? [];
    breadcrumbData.forEach((item: any) => {
      openKeys.value.push(item.path);
    });
  }
);

// const openKeys = computed(() => {
//   // 拿到当前路由的path
//   const currentPath = route.path;
//   let breadcrumbData = menuStore.getBreadcrumbList[currentPath] ?? [];
//   return breadcrumbData;
// });

const onClickMenuItem = (key: string) => {
  Message.info({ content: `You select ${key}`, showIcon: true });
};
</script>
