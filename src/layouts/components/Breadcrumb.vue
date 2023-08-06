<template>
  <a-breadcrumb class="breadcrumb-container">
    <a-breadcrumb-item>
      <icon-home />
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
      <span @click="handleClick(item, index)">{{ item.meta.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script lang="ts" name="Breadcrumb" setup>
import { useMenuStore, MenuItem } from '@/store/modules/menu';
const menuStore = useMenuStore();
// const breadcrumbList = ref([]); // 面包屑列表

const route = useRoute(); // 当前路由
const router = useRouter(); // 路由实例

const breadcrumbList = computed(() => {
  // 拿到当前路由的path
  const currentPath = route.path;
  let breadcrumbData = menuStore.getBreadcrumbList[currentPath] ?? [];
  return breadcrumbData;
});

const handleClick = (item: MenuItem, index: number) => {
  console.log(item, index);
  if (index === breadcrumbList.value.length - 1) return;
  router.push(item.path);
};
</script>
<style lang="scss" scoped>
.breadcrumb-container {
  margin: 16px 0;
}
</style>
