<template>
	<navbar name="navbar 组件" :content="data" @changeData="changeData">
		<view>
			我是插槽内容
		</view>
	</navbar>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { onReady } from '@dcloudio/uni-app'
const data = ref("动态内容")
const changeData = (val)=>{
	data.value=val
}
	// export default {
	// 	data() {
	// 		return {
	// 			title: 'Hello'
	// 		}
	// 	},
	// 	onLoad() {

	// 	},
	// 	methods: {

	// 	}
	// }
	const title = ref('Hello')
	const fruits = reactive([
		{name:'苹果',number:1},
		{name:'橘子',number:2},
		{name:'香蕉',number:3},
		])
	onReady(()=>{
		console.log('ready to do something！')
	})
	const addNumber = () => {
		fruits.forEach(fruit =>{
			fruit.number ++
		})
	}
	const totalFruits  = computed(()=>{
		return fruits.reduce((total,current)=>total+current.number,0)
	})
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
