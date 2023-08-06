<template>
  <template v-for="subItem in menuList" :key="subItem.path">
    <a-sub-menu v-if="subItem.children?.length" :key="subItem.path">
      <template #title>
        <component :is="subItem.meta.icon" v-if="subItem.meta && subItem.meta.icon"></component>
        <icon-menu v-else />
        {{ subItem.meta.title }}
      </template>
      <SubMenu :menu-list="subItem.children" />
    </a-sub-menu>
    <a-menu-item v-else :key="subItem.path + ''" @click="goto(subItem.path)">
      <component :is="subItem.meta.icon" v-if="subItem.meta && subItem.meta.icon"></component>
      <icon-menu v-else />
      {{ subItem.meta.title }}
    </a-menu-item>
  </template>
</template>
<script lang="ts" name="SubMenu" setup>
import { MenuItem } from '@/store/modules/menu';
import { useRouter } from 'vue-router';

defineProps<{ menuList: MenuItem[] }>();

const router = useRouter();

const goto = (path: string) => {
  router.push(path);
};
</script>
