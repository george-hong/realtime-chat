<template>
	<view class="app-header">
    <!-- 自定义导航栏时，顶部会陷入到状态栏，用一个空的元素占位，https://uniapp.dcloud.net.cn/collocation/pages.html#customnav -->
    <view class="status-bar"></view>
		<view class="content">
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
	</view>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  
  const titleInfo = reactive({
    leftContent: '左侧',
    rightContent: '右侧',
    title: '标题',
  });
</script>

<style lang="scss">
  .app-header {
    background: $uni-color-primary;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    
    .status-bar {
      height: var(--status-bar-height);
      width: 100%;
    }
    
    .content {
      display: flex;
      align-items: center;
      
      > view {
        display: flex;
        justify-content: center;
        align-items: center;
        height: $layout-status-header-height;
        
        > text {
          font-size: $font-size-title;
        }
      }
      
      .left, .right {
        width: 100px;
      }
      
      .title {
        flex: 1;
      }
    }
  }
</style>