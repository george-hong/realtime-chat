<template>
  <layout>
    <template #left>
      <text @click="back">返回</text>
    </template>
    <template #title>
      <text>联系人A</text>
    </template>
    
    <view class="chat-container">
      <view class="chat-view">
        聊天窗口
      </view>
      <view class="operation-area">
        <chat-input></chat-input>
      </view>
    </view>
  </layout>
</template>

<script lang="ts" setup>
  const back = () => {
    uni.navigateBack();
  };
</script>

<style lang="scss" scoped>
  .chat-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .chat-view {
      flex: 1;
    }
  }
</style>
