<template>
  <view
     class="view-list-container"
   >
     <view
       class="view-list-item"
       v-for="(info, index) in props.infoList"
       :key="index"
       @click="triggerClickEvent($event, info, index)"
     >
       <view
        v-if="info.img"
        class="img-container"  
      >
         <img class="avatar" :src="info.img" />
       </view>
       <view :class="{ 'info-content': true, 'with-sub-info': !!info.right, 'with-img': !!info.img }">
         <view class="title single-line">
           <text>{{ info.title }}</text>
         </view>
         <view
          class="desc single-line"
          v-if="info.desc"
        >
           <text>{{ info.desc }}</text>
         </view>
       </view>
       <view
        class="sub-info"
        v-if="info.right"
      >
         <view
          class="single single-line"
          v-if="typeof info.right === 'string'"
        >
           <text>{{ info.right }}</text>
         </view>
         <view
          class="double"
          v-if="typeof info.right === 'object'"
        >
           <view
            class="single-line"
            v-if="info.right.top"
          >
             <text>{{ info.right.top }}</text>
           </view>
           <view
            class="single-line"
            v-if="info.right.bottom"
          >
             <text class="single-line">{{ info.right.bottom }}</text>
           </view>
         </view>
       </view>
     </view>
   </view>
</template>

<script lang="ts" setup>
  interface IInfoItem {
    title: string;
    img?: string;
    desc?: string;
    right?: string | { top?: string, bottom?: string };
  }
  type TriggerEvent = (event: Event, info: IInfoItem, index: number) => unknown;
  
  const props = defineProps<{
    infoList: Array<IInfoItem>;
    onClick?: TriggerEvent;
  }>();
  
  const emit = defineEmits(['click']);
  const triggerClickEvent: TriggerEvent = (event, info, index) => {
    emit('click', { event, info, index });
  };
</script>

<style scope lang="scss">
  .view-list-container {
    border-top: 1px solid $uni-border-color;
    
    .view-list-item {
      display: flex;
      padding: 12rpx;
      border-bottom: 1px solid $uni-border-color;
      
      .img-container {
        width: 96rpx;
        padding-right: 12rpx;
      }
      
      .info-content {
        flex: 1;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        .title text {
            line-height: 48rpx
          }
        
        .desc text {
          font-size: $font-size-mini;
          color: $uni-text-color-placeholder;
          line-height: 36rpx;
        }
      }
      
      .sub-info {
        width: 112rpx;
        padding-left: 12rpx;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
        text {
          color: $uni-text-color-placeholder;
          font-size: $font-size-mini;
        }
        
        .single, .double {
          overflow: hidden;
        }
      }
    }
  }
</style>