<template>
  <view :class="['message', props.direction === 'right' ? 'reverse' : '']">
    <view>
      <img class="avatar" :src="props.img">
    </view>
    <view
      class="message-container text-message"
      v-if="props.type === 'text' || props.type === undefined"
    >
      <text>{{ props.content }}</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    img: string;
    type: 'text' | 'voice';
    content: string;
    direction?: 'left' | 'right';
  }>();
</script>

<style lang="scss" scoped>
  .message {
    width: 100%;
    margin-bottom: $pd2;
    display: flex;
    
    &.reverse {
      flex-direction: row-reverse;
      
      .message-container {
        margin: 0 $pd2 $pd2 calc($avatar-width + $pd2);
        background: greenyellow;
        
        &::after {
          left: 100%
          ;
          border-color: transparent transparent transparent greenyellow;
        }
      }
    }
    
    .message-container {
      margin: 0 calc($avatar-width + $pd2) $pd2 $pd2;
      padding: $pd1;
      border-radius: 8rpx;
      width: auto;
      background: #fff;
      position: relative;
      
      &::after {
        content: '';
        width: 0;
        height: 0;
        border-color: transparent #FFF transparent transparent;
        border-style: solid;
        border-width: 12rpx;
        display: block;
        position: absolute;
        left: -24rpx;
        top: 30rpx;
      }
    }
  }
</style>