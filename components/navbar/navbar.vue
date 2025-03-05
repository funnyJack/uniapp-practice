<template>
	<view>name的内容是：{{name}} </view>
	<view>content的内容是：{{content}} </view>
	<button @click="changeContent">修改content内容</button>
	<slot></slot>
</template>

<script setup>
	defineProps(['name','content'])
	const emit = defineEmits(['changeData'])
	const changeContent = ()=>{
		emit('changeData','我是修改后的内容')
	}
</script>

<style>

</style>