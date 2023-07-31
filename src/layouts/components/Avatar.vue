<template>
  <a-dropdown trigger="click">
    <a-avatar :style="{ backgroundColor: '#3370ff' }">
      <IconUser />
    </a-avatar>
  </a-dropdown>
</template>
<script lang="ts" name="Avatar" setup>
import { IconUser } from '@arco-design/web-vue/es/icon';
</script>
<style lang="scss" scoped></style>
