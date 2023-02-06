<template>
	<layout
    :on-switch="switchComponent"
  >
   <contacts v-if="currentPageInfo.component === 'contacts'"></contacts>
    <mine v-else-if="currentPageInfo.component === 'mine'"></mine>
    <chat v-else></chat>
    
    <template #left>
      <text>右侧</text>
    </template>
    <template #title>
      <text>{{ currentPageInfo.title }}</text>
    </template>
    <template #right>
      <text>右侧</text>
    </template>
	</layout>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  
  const pageInfo = {
    chat: {
      component: 'chat',
      title: '会话',
    },
    contacts: {
      component: 'contacts',
      title: '通讯录',
    },
    mine: {
      component: 'mine',
      title: '我的',
    }
  };
  const currentPageInfo = ref(pageInfo.chat);
  
  const switchComponent = (componentName: string) => {
    currentPageInfo.value = pageInfo[componentName];
  };
  
</script>

<style>
  .app {
    width: 100%;
    height: 100%;
  }
</style>
