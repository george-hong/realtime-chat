<template>
	<view class="app-header">
    <!-- 自定义导航栏时，顶部会陷入到状态栏，用一个空的元素占位，https://uniapp.dcloud.net.cn/collocation/pages.html#customnav -->
    <view class="status-bar"></view>
		<view class="content">
      <view
        v-for="key in ['left', 'title', 'right']"
        :key="key"
        :class="key"
      >
        <template v-if="props.headerConfig[key]">
          <text
            v-if="props.headerConfig[key].isIcon !== true"
            @click="props.headerConfig[key].onClick"
          >{{ props.headerConfig[key].content }}</text>
          <iconfont
            v-else
            :name="props.headerConfig[key].content"
            @click="props.headerConfig[key].onClick"
            class="app-header-icon"
          ></iconfont>
        </template>
      </view>
    </view>
	</view>
</template>

<script lang="ts" setup>
  import { IHeaderConfig } from '../../types/component';
  
  const props = defineProps<{
    headerConfig: IHeaderConfig;
  }>();
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
      
      .left, .right {
        width: 150rpx;
        
        text, .app-header-icon {
          color: #FFF;
          font-size: $font-size-primary;
        }
      }
      
      .title {
        flex: 1;
        
        text {
          font-size: $font-size-title;
          color: #FFF;
        }
      }
    }
  }
</style>