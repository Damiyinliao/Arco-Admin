<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <Logo />
      </a-space>
    </div>
    <div class="right-side">
      <a-space>
        <a-tooltip content="搜索">
          <a-button sharp="circle" type="outline">
            <template #icon>
              <icon-search />
            </template>
          </a-button>
        </a-tooltip>
        <a-tooltip content="语言">
          <a-dropdown>
            <a-button sharp="circle" type="outline">
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
          <a-button type="outline" shape="circle">
            <template #icon>
              <icon-moon-fill v-if="theme === 'dark'" />
              <icon-sun-fill v-else />
            </template>
          </a-button>
        </a-tooltip>
        <a-tooltip content="消息通知">
          <a-badge :count="9" dot>
            <a-button type="outline" shape="circle">
              <icon-notification />
            </a-button>
          </a-badge>
        </a-tooltip>
        <a-tooltip content="全屏模式">
          <a-button type="outline" shape="circle">
            <icon-fullscreen />
          </a-button>
        </a-tooltip>
        <a-tooltip content="设置">
          <a-button type="outline" shape="circle">
            <icon-setting />
          </a-button>
        </a-tooltip>
        <a-tooltip content="个人主页">
          <Avatar />
        </a-tooltip>
      </a-space>
    </div>
  </div>
</template>
<script lang="ts" name="Navbar" setup>
import Logo from '@/layouts/components/Logo.vue';
import Avatar from '@/layouts/components/Avatar.vue';
const theme = ref('dark');
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
}
</style>
