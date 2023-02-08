<template>
  <view class="layout">
    <app-header :header-config="props.headerConfig"></app-header>
    <view :class="{'app-content': true, 'no-app-bar': props.appBarVisible === false }">
      <slot></slot>
    </view>
    <app-bar
      :on-switch="props.onSwitch"
      v-if="props.appBarVisible"
    ></app-bar>
  </view>
</template>

<script lang="ts" setup>
  import AppHeader from './app-header.vue';
  import AppBar from './app-bar.vue';
  import { IHeaderConfig } from '../../types/component';

  const props = defineProps<{
    headerConfig: IHeaderConfig;
    onSwitch?: (key: string) => unknown;
    appBarVisible?: boolean;
  }>();

</script>

<style lang="scss">
  .layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    
    .app-content {
      flex: 1;
      padding-top: calc(var(--status-bar-height) + $layout-status-header-height);
      padding-bottom: $layout-status-bar-height;
      
      &.no-app-bar {
        padding-bottom: 0;
      }
    }
  }
</style>
