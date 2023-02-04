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
  html,
  body {
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
    font-size: 24rpx;
  }
</style>
