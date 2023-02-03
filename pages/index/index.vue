<template>
	<view class="app">
		<view class="text-area">
      <layout>
        <text>custom content</text>
      </layout>
		</view>
	</view>
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
</style>
