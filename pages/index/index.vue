<template>
	<layout>
    <text>custom content</text>
	  <view class="empty"></view>
	  <text>custom content</text>
	</layout>
</template>

<script>
  import Layout from '../../components/layout/index.vue';
  
	export default {
    components: {
      Layout,
    },
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
  .app {
    width: 100%;
    height: 100%;
  }
  .empty {
    height: 3000px;
    background: green;
  }
</style>
