<template>
  <a-layout class="layout">
    <a-layout-sider hide-trigger collapsible :collapsed="collapsed">
      <Logo :collapsed="collapsed" />
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-wrapper">
        <div class="navebar">
          <div class="left-navbar">
            <a-button shape="round" @click="handleCollapse">
              <IconCaretRight v-if="collapsed" />
              <IconCaretLeft v-else />
            </a-button>
            <Breadcrumb style="margin-left: 20px" />
          </div>
          <div class="right-navbar">
            <Navbar />
          </div>
        </div>
      </a-layout-header>
      <a-layout>
        <Tabs />
        <a-layout-content class="main-wrapper">
          <Page class="content-wrapper" />
        </a-layout-content>
        <a-layout-footer>
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" name="Layout" setup>
import Navbar from '@/layouts/Navbar/index.vue';
import Menu from '@/layouts/Menu/index.vue';
import Breadcrumb from '@/layouts/components/Breadcrumb.vue';
import Page from '@/layouts/Page.vue';
import Logo from '@/layouts/components/Logo.vue';
import Tabs from '@/layouts/components/Tabs.vue';
import Footer from './components/Footer.vue';
import { IconCaretLeft, IconCaretRight } from '@arco-design/web-vue/es/icon';

// import { useAppStore } from '@/store/modules/app';
// const appStore = useAppStore();
const collapsed = ref(false);

const handleCollapse = () => {
  collapsed.value = !collapsed.value;
};
</script>
<style scoped lang="scss">
.layout {
  height: 100vh;
  width: 100vw;
}
.header-wrapper {
  padding-left: 20px;
  border-bottom: 1px solid var(--color-neutral-3);
}
.menu-wrapper {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-neutral-2);
}
.navebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-wrapper {
  padding: 10px;
  background-color: var(--color-neutral-2);
  overflow: auto;
}
.content-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: var(--color-bg-1);
}
</style>
