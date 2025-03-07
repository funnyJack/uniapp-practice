<template>
	<view class="demo-water" v-for="(item, index) in items" :key="index">
		<up-lazy-load threshold="-350" border-radius="10" image="/static/logo.png" :index="index"></up-lazy-load>
		<view class="demo-title">
			{{item.title}}
		</view>
		<view class="demo-price">
			{{item.times}}
		</view>
		<view class="demo-tag">
			<view class="demo-tag-owner">
				{{item.tag[0]}}
			</view>
			<view class="demo-tag-text">
				{{item.tag[1]}}
			</view>
		</view>
		<view class="isDot" v-if="item.isDot">
			{{item.isDot}}
		</view>
	</view>
</template>

<script setup>
	defineProps(['items'])
</script>

<style lang="scss" scoped>
	.demo-water {
		position: relative;
		margin: 10rpx 10rpx 10rpx 0;
		background-color: #fff;
		border-radius: 16rpx;
		padding: 16rpx
	}

	.demo-title {
		font-size: 32rpx;
		color: #303133;
		margin-top: 10rpx;
	}

	.demo-price {
		font-size: 24rpx;
		color: #777;
		margin-top: 10rpx;
	}

	.demo-tag {
		display: flex;
		margin-top: 10rpx;

		.demo-tag-owner {
			border: 1px solid rgb(252, 163, 169);
			color: #ffaa00;
			font-size: 20rpx;
			display: flex;
			align-items: center;
			padding: 4rpx 14rpx;
			border-radius: 50rpx;
		}

		.demo-tag-text {
			border: 1px solid #00aaff;
			color: #00aaff;
			margin-left: 20rpx;
			border-radius: 50rpx;
			padding: 4rpx 14rpx;
			font-size: 20rpx;
			display: flex;
			align-items: center;
		}
	}

	.isDot {
		position: absolute;
		top: 20rpx;
		right: 20rpx;
		font-size: 24rpx;
		color: #fff;
		line-height: 32rpx;
		background-color: #ff0000;
		text-align: center;
		boarder-radius: 10rpx;
		padding: 4rpx 10rpx;
	}
</style>
