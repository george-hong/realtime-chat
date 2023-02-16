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
  import { ref, reactive, onMounted } from 'vue';
  import { UserForClient } from '../../business/user';
  import PROJECT_CONFIG from '../../config/project';

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

  const initSocket = () => {
    uni.connectSocket({
      url: PROJECT_CONFIG.CLIENT_SOCKET_BASE_URL + '/chat',
    });
    uni.onSocketOpen(function (res) {
      console.log('WebSocket连接已打开！', res);
    });
    uni.onSocketError(function (res) {
      console.log('WebSocket连接打开失败，请检查！');
    });
  };

  onMounted(() => {
    console.log('mounted');

    initSocket();
  });

  console.log(UserForClient.getUserBaseInfoFromLocal());
</script>

<style>
  .app {
    width: 100%;
    height: 100%;
  }
</style>
