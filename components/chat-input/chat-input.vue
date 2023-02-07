<template>
  <view class="chat-input">
    <view class="main">
      <view class="left">
        <view class="icon-box">
          <iconfont
            name="voice"
            class="chat-page-icon"
          ></iconfont>
        </view>
      </view>
      <view class="center">
        <textarea auto-height></textarea>
      </view>
      <view class="right">
        <button class="primary">发送</button>
      </view>
    </view>
    <view class="addition">

    </view>
  </view>
</template>

<script lang="ts" setup>
  
</script>

<style lang="scss" scoped>
  .chat-input {
    display: flex;
    flex-direction: column;
    background: #F0F0F0;
    
    .main {
      display: flex;
      align-items: flex-start;
      
      .chat-page-icon {
        font-size: $font-size-title;
      }
      
      > view {
        padding: $pd2;
      }
      
      .left {
        .icon-box {
          padding: $pd1;
          width: $pd4;
          height: $pd4;
          border: 2px solid #000;
          border-radius: 50%;
        }
      }
      
      .center {
        flex: 1;
        padding-left: 0;
        padding-right: 0;
        
        textarea {
          width: 100%;
          background: #FFF;
          padding: 18rpx;
          border-radius: $pd1;
          max-height: 240rpx;
          overflow-y: scroll;
        }
      }
      
      .right {
        
        button {
          padding: 24rpx;
          line-height: 1;
          height: auto;
        }
      }
    }
  }
</style>