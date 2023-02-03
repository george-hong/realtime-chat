<template>
  <view class="layout">
    <app-header></app-header>
    <view class="app-content">
      <slot></slot>
    </view>
    <app-bar></app-bar>
  </view>
</template>

<script lang="ts">
  import AppHeader from './app-header.vue';
  import AppBar from './app-bar.vue';

  export default {
    components: {
      AppHeader,
      AppBar,
    },
    name: "layout",
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .app-content {
      flex: 1;
    }
  }
</style>
