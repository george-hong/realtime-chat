<template>
	<view class="app-bar">
		<view
      class="menu-item"
      v-for="menu in menus"
      :key="menu.key"
      @click="switchTo(menu.key)"
    >
      <view>
        <iconfont
          :name="menu.icon"
          class="app-bar-icon"
        ></iconfont>
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
      text: '会话',
      icon: 'chat',
      key: 'session',
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
    background: #FFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    border-top: 1px solid $uni-border-color;
    padding: 12rpx;
    
    .menu-item {
      flex: 1;
      
      > view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        .app-bar-icon {
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