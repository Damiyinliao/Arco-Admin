<template>
  <div class="footer">
    <a href="https://github.com/Damiyinliao/Arco-Admin" target="_blank">
      2023 © Arco-Admin By Damiyinliao.
    </a>
  </div>
</template>
<script lang="ts" name="Footer" setup></script>
<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background-color: var(--color-bg-1);
  border-top: 1px solid var(--color-neutral-3);
  a {
    font-size: 14px;
    color: var(--color-text-2);
    text-decoration: none;
    letter-spacing: 0.5px;
  }
}
</style>
