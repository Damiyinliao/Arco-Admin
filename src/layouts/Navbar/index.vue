<template>
  <div class="navbar">
    <a-space>
      <a-tooltip content="搜索">
        <a-button shape="circle">
          <template #icon>
            <icon-search />
          </template>
        </a-button>
      </a-tooltip>
      <a-tooltip content="语言">
        <a-dropdown>
          <a-button shape="circle">
            <template #icon>
              <icon-language />
            </template>
          </a-button>
          <template #content>
            <a-doption>中文</a-doption>
            <a-doption>英文</a-doption>
          </template>
        </a-dropdown>
      </a-tooltip>
      <a-tooltip content="切换黑暗或亮色模式">
        <a-button shape="circle">
          <template #icon>
            <icon-moon-fill v-if="theme === 'dark'" />
            <icon-sun-fill v-else />
          </template>
        </a-button>
      </a-tooltip>
      <a-tooltip content="消息通知">
        <a-badge :count="9" dot>
          <a-button shape="circle">
            <icon-notification />
          </a-button>
        </a-badge>
      </a-tooltip>
      <a-tooltip content="全屏模式">
        <a-button shape="circle" @click="toggleFullScreen">
          <icon-fullscreen-exit v-if="isFullscreen" />
          <icon-fullscreen v-else />
        </a-button>
      </a-tooltip>
      <a-tooltip content="设置">
        <a-button shape="circle">
          <icon-settings />
        </a-button>
      </a-tooltip>
      <a-tooltip content="个人主页">
        <Avatar />
      </a-tooltip>
    </a-space>
  </div>
</template>
<script lang="ts" name="Navbar" setup>
import Avatar from '@/layouts/components/Avatar.vue';
import { useFullscreen } from '@vueuse/core';
const theme = ref('dark');
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
</script>
<style lang="scss" scoped>
.navbar {
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 24px;
}
</style>
