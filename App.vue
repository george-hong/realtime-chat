<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  /*每个页面公共css */
  @import 'static/font/iconfont.css';
  
  html,
  body {
    height: 100%;
  }
  
  text, input, text-area, select, button, textarea {
    box-sizing: border-box;
    font-size: $font-size-primary;
  }
  
  .single-line {
    word-break: break-all;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    text {
      white-space: nowrap;
    }
  }
  
  button {
    
    &.primary {
      border: none;
      background: $uni-color-primary;
      color: #FFF;
    }
  }
  
  img.avatar {
    width: $avatar-width;
    height: $avatar-width;
    border-radius: 8rpx;
  }
</style>
