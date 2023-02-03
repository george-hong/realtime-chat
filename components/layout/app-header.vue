<template>
	<view class="app-header">
		<view class="left">
      <text>{{ titleInfo.leftContent }}</text>
    </view>
		<view class="title">
      <text>{{ titleInfo.title }}</text>
    </view>
		<view class="right">
      <text>{{ titleInfo.rightContent }}</text>
    </view>
	</view>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  
  const titleInfo = reactive({
    leftContent: 'left',
    rightContent: 'right',
    title: 'page title',
  });
</script>

<style lang="scss">
  .app-header {
    height: 50px;
    background: greenyellow;
    display: flex;
    align-items: center;
    
    > view {
      display: flex;
      justify-content: center;
    }
    
    .left, .right {
      width: 100px;
    }
    
    .title {
      flex: 1;
    }
  }
</style>