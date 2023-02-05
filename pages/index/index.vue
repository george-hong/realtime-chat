<template>
	<layout
    :on-switch="switchComponent"
  >
    <KeepAlive>
      <Contacts v-if="currentComponent === 'contacts'"></Contacts>
      <Mine v-else-if="currentComponent === 'mine'"></Mine>
      <Chat v-else></Chat>
    </KeepAlive>
    
    <template #left>
      <text>left</text>
    </template>
    <template #title>
      <text>标题</text>
    </template>
    <template #right>
      <text>右侧</text>
    </template>
	</layout>
</template>

<script lang="ts" setup>
  import Layout from '../../components/layout/index.vue';
  import Chat from '../../components/chat/chat.vue';
  import Contacts from '../../components/contacts/contacts.vue';
  import Mine from '../../components/mine/mine.vue';
  import { ref } from 'vue';
  
  let currentComponent = ref('chat');
  
  const switchComponent = (componentName: string) => {
    currentComponent.value = componentName;
    console.log(currentComponent.value);
  };
  
</script>

<style>
  .app {
    width: 100%;
    height: 100%;
  }
</style>
