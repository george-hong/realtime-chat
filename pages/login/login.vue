<template>
  <view class="login">
    <view class="login-window">
      <view class="input-area">
        <text>账号：</text>
        <input type="text" placeholder="请输入账号">
      </view>
      <view class="input-area">
        <text>密码：</text>
        <input type="password" placeholder="请输入密码">
      </view>
      <view class="button-area">
        <button class="primary" @click="login">登录</button>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
  const login = () => {
    uni.redirectTo({
      url: '/pages/index/index',
    });
  };
</script>

<style scoped lang="scss">
  .login {
    background: $uni-color-primary;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .login-window {
      width: 70%;
      padding: $pd3;
      background: #FFF;
      border-radius: 10rpx;
      
      .input-area {
        padding: 8rpx;
        
        input {
          margin: $pd2 0;
          border-bottom: 1px solid $uni-border-color;
        }
      }
      
      .button-area {
        padding: $pd2 0;
        
        button {
          border: none;
          background: $uni-color-primary;
          color: #FFF;
        }
      }
    }
  }
</style>
