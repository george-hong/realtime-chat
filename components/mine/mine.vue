<template>
  <view class="button-area">
    <button
      class="primary"
      @click="logout"
    >
      退出登录
    </button>
  </view>
</template>

<script lang="ts" setup>
  const logout = () => {
    uni.redirectTo({
      url: '/pages/login/login',
    });
  };
</script>

<style scoped lang="scss">
  .button-area {
    padding: $pd3;
  }
</style>