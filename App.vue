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
  
  text {
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
</style>
