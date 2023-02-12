<template>
  <view class="login">
    <view class="login-window">
      <view class="input-area">
        <text>账号：</text>
        <input
          type="text"
          placeholder="请输入账号"
          v-model="accountInfo.account"
        >
      </view>
      <view class="input-area">
        <text>密码：</text>
        <input
          type="password"
          placeholder="请输入密码"
          v-model="accountInfo.password"
        >
      </view>
      <view class="button-area">
        <button class="primary" @click="login">登录</button>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { reactive, onMounted } from 'vue';
  import {
    requestToGetRSAPublicKey,
    requestToSignIn,
  } from '../../libs/request/modules/user';
  import { UserForClient } from '../../business/user';
  import Secret, { SecretType } from '../../libs/secret';
  import toast from '../../libs/toast';
  
  const accountInfo = reactive({
    account: 'test',
    password: '1234567890',
  });
  let RSAPublicKey;
  
  onMounted(() => {
    requestToGetRSAPublicKey()
      .then(response => {
        console.log('response', response);
        RSAPublicKey = response.data.content;
      })
      .catch(err => {
        console.log('err', err);
      });
      
    uni.showToast({
      title: '错误',
    })
  });
  
  const login = () => {
    const loginInfo = {
      account: accountInfo.account,
      password: accountInfo.password,
    };
    
    loginInfo.password = Secret.encode(loginInfo.password, { type: SecretType.SHA256 });
    loginInfo.password = Secret.encode(
      loginInfo.password,
      {
        type: SecretType.RSA,
        key: RSAPublicKey,
      }
    );
    
    requestToSignIn(loginInfo)
      .then(response => {
        UserForClient.saveSignInInfoToLocal(response);
        redirectToIndexPage();
      })
      .catch(err => {
        toast('登录失败', { type: 'success' });
        console.log('err', err);
      });
  };
  
  const redirectToIndexPage = () => {
    uni.redirectTo({
      url: '/pages/index/index',
    });
  }
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
          padding: $pd1 0;
          margin: $pd2 0;
          height: auto;
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
