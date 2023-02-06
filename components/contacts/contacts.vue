<template>
  <view>
    <view-list :info-list="contacts"></view-list>
  </view>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  
  const contacts = reactive([
    {
      img: 'https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg',
      title: '联系人A',
    },
    {
      img: 'https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg',
      title: '联系人B',
    },
  ]);
</script>

<style>

</style>