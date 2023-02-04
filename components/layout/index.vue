<template>
  <view class="layout">
    <app-header></app-header>
    <view class="app-content">
      <slot></slot>
    </view>
    <app-bar></app-bar>
  </view>
</template>

<script lang="ts" setup>
  import AppHeader from './app-header.vue';
  import AppBar from './app-bar.vue';


</script>

<style lang="scss">
  .layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .app-content {
      flex: 1;
      flex-grow: 0;
      padding-top: calc(var(--status-bar-height) + $layout-status-header-height);
      padding-bottom: $layout-status-bar-height;
    }
  }
</style>
