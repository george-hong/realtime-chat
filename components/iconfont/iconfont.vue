<template>
  <span :class="['icon', 'iconfont', `icon-${props.name}`, props.class || '']"></span>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    name: string;
    class?: string;
  }>();
  
  
</script>

<style>

</style>
