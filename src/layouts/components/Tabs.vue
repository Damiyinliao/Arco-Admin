<template>
  <a-tabs
    :active-key="currentTabMenu"
    :editable="true"
    :hide-content="true"
    @tab-click="handleTabClick"
    @delete="handleTabRemove"
  >
    <a-tab-pane v-for="item of tabsMenuList" :key="item.path">
      <template #title>
        <component :is="item.icon" v-if="item.icon"></component>
        <icon-menu v-else />
        {{ item.title }}
      </template>
    </a-tab-pane>
    <template #extra>
      <a-dropdown-button>
        <span>更多</span>
        <template #icon>
          <icon-down />
        </template>
        <template #content>
          <a-doption>关闭当前</a-doption>
          <a-doption>关闭全部</a-doption>
        </template>
      </a-dropdown-button>
    </template>
  </a-tabs>
</template>
<script name="Tabs" lang="ts" setup>
import router from '@/router';
import { useTabsStore } from '@/store/modules/tabs';

const route = useRoute();
const tabsStore = useTabsStore();
const tabsMenuList = computed(() => tabsStore.tabsList);

const currentTabMenu = ref(route.fullPath); //当前标签菜单

// 监控路有变化并添加到tabsList中
watch(
  () => route.fullPath,
  () => {
    currentTabMenu.value = route.fullPath;
    const tabsParams = {
      icon: route.meta.icon as string,
      title: route.meta.title as string,
      path: route.fullPath,
      name: route.name as string
    };
    tabsStore.addTab(tabsParams);
  },
  { immediate: true }
);

/** 增加标签菜单，@tab-click返回回来的是a-tab-pane的key，这里即为path  */
const handleTabClick = (key: string | number) => {
  console.log('handleTabClick', key);
  router.push(key as string);
};

/** 移除标签菜单, key即为点击的标签菜单的path */
const handleTabRemove = (key: string | number) => {
  tabsStore.removeTab(key as string, key === route.fullPath);
};
</script>
<style lang="scss" scoped></style>
