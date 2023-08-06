<template>
  <div class="logo">
    <img src="/vite.svg" alt="logo" />
    <a-typography-title v-show="!collapsed" :style="{ margin: 0, fontSize: '18px' }" :heading="5">
      Arco-Admin
    </a-typography-title>
  </div>
</template>
<script lang="ts" name="Logo" setup>
defineProps({
  collapsed: {
    type: Boolean,
    required: true,
    default: false
  }
});
</script>
<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 5px;
  background: rgba(255, 255, 255, 0.2);
  img {
    height: 32px;
    margin-right: 8px;
  }
}
</style>
