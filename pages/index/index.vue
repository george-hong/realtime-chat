<template>
	<layout
    :on-switch="switchComponent"
    app-bar-visible
  >
    <contacts v-if="currentPageInfo.component === 'contacts'"></contacts>
    <mine v-else-if="currentPageInfo.component === 'mine'"></mine>
    <session v-else></session>
    
    <template #title>
      <text>{{ currentPageInfo.title }}</text>
    </template>
    <template #right>
      <text v-if="currentPageInfo.component !== 'mine'">右侧</text>
    </template>
	</layout>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  
  const pageInfo = {
    session: {
      component: 'session',
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
  const currentPageInfo = ref(pageInfo.session);
  
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
