<template>
  <div class="home">Home--首页</div>
</template>
<script lang="ts" name="Home" setup>
const route = useRoute();
const router = useRouter();

onMounted(() => {
  console.log('route---', route);
  console.log('router', router);
});
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
