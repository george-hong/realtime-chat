<template>
	<view class="app-header">
    <!-- 自定义导航栏时，顶部会陷入到状态栏，用一个空的元素占位，https://uniapp.dcloud.net.cn/collocation/pages.html#customnav -->
    <view class="status-bar"></view>
		<view class="content">
      <view class="left">
        <slot name="left"></slot>
      </view>
      <view class="title">
        <slot name="title"></slot>
      </view>
      <view class="right">
        <slot name="right"></slot>
      </view>
    </view>
	</view>
</template>

<script lang="ts" setup>

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
      }
      
      text {
        font-size: $font-size-title;
      }
      
      .left, .right {
        width: 150rpx;
      }
      
      .title {
        flex: 1;
      }
    }
  }
</style>