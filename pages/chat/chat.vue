<template>
  <layout
    :header-config="headerConfig"
  >
    <view class="chat-container">
      <scroll-view
        scroll-y="true"
        class="chat-view"
      >
        <view class="message-box">
          <message
            v-for="message in messages"
            :key="message.id"
            v-bind="message"
          ></message>
        </view>
      </scroll-view>
      <view class="operation-area">
        <chat-input></chat-input>
      </view>
    </view>
  </layout>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  
  const back = () => {
    uni.navigateBack();
  };
  const headerConfig = {
    left: {
      content: 'left',
      isIcon: true,
      onClick: back,
    },
    title: {
      content: '联系人A',
    }
  }
  const messages = reactive([
    {
      id: 1,
      img: 'https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg',
      type: 'text',
      content: '这是消息内容',
    },
    {
      id: 2,
      img: 'https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg',
      type: 'text',
      content: '这是消息内容可以呢很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的',
    },
    {
      id: 3,
      img: 'https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg',
      direction: 'right',
      type: 'text',
      content: '这是消息内容可以呢很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的',
    },
    {
      id: 4,
      img: 'https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg',
      direction: 'right',
      type: 'text',
      content: '右侧消息',
    },
    {
      id: 5,
      img: 'https://lmg.jj20.com/up/allimg/tp09/210F2130512J47-0-lp.jpg',
      type: 'text',
      content: '这是消息内容可以呢很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的',
    },
  ]);
</script>

<style lang="scss" scoped>
  .chat-container {
    height: calc(100vh - $layout-status-header-height - var(--status-bar-height));
    display: flex;
    flex-direction: column;
    
    .chat-view {
      overflow-y: scroll;
      flex: 1;
      background: #F6F6F6;
      
      .message-box {
        padding: $pd2;
      }
    }
  }
</style>
