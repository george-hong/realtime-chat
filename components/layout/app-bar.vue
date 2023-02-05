<template>
	<view class="app-bar">
		<view
      class="menu-item"
      v-for="menu in menus"
      :key="menu.key"
      @click="switchTo(menu.key)"
    >
      <view>
        <span :class="['icon', 'iconfont', `icon-${menu.icon}`]"></span>
      </view>
      <view>
        <text>
          {{ menu.text }}
        </text>
      </view>
    </view>
	</view>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    onSwitch?: (key: string) => unknown,
  }>();
  
  const menus = [
    {
      text: '聊天',
      icon: 'chat',
      key: 'chat',
    },
    {
      text: '通讯录',
      icon: 'pepole',
      key: 'contacts',
    },
    {
      text: '我的',
      icon: 'me',
      key: 'mine',
    }
  ];
  
  const switchTo = (key: string) => {
    props.onSwitch?.(key);
  };
</script>

<style lang="scss">
  .app-bar {
    width: 100%;
    // height: $layout-status-bar-height;
    background: #FFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    border-top: 1px solid #333;
    padding: 12rpx;
    
    .menu-item {
      flex: 1;
      
      > view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        .icon {
          font-size: $font-size-large;
          margin-bottom: 6rpx;
        }
        
        text {
          font-size: $font-size-mini;
        }
      }
    }
  }
</style>