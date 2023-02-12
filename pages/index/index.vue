<template>
	<layout
    :on-switch="switchComponent"
    :header-config="headerConfig"
    app-bar-visible
  >
    <contacts v-if="currentPageInfo.component === 'contacts'"></contacts>
    <mine v-else-if="currentPageInfo.component === 'mine'"></mine>
    <session v-else></session>
	</layout>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { UserForClient } from '../../business/user';
  
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
  const headerConfig = reactive({
    title: {
      content: pageInfo.session.title,
    }
  });
  const currentPageInfo = ref(pageInfo.session);
  
  const switchComponent = (componentName: string) => {
    currentPageInfo.value = pageInfo[componentName];
    headerConfig.title.content = pageInfo[componentName].title;
  };
  
  console.log(UserForClient.getUserBaseInfoFromLocal());
</script>

<style>
  .app {
    width: 100%;
    height: 100%;
  }
</style>
