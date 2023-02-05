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
  
  view, scroll-view, text {
    box-sizing: border-box;
    font-size: $font-size-primary;
  }
</style>
