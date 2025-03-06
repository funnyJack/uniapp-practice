<template>
	<view class="content">
		<up-search placeholder="搜索景点" bgColor="#e3e3e3" v-model="keyword" />
		<up-swiper v-if="banners.length" :list="banners" keyName="image" showTitle circular />
		<up-notice-bar text="这只是测试"></up-notice-bar>
		
		<view class="list">
			<up-waterfall v-model="flowList" ref="uWaterfallRef">
				<template v-slot:left="{leftList}">
					<view class="demo-water" v-for="(item, index) in leftList" :key="index">
						<up-lazy-load threshold="-350" border-radius="10" image="/static/logo.png"
							:index="index"></up-lazy-load>
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
				<template v-slot:right="{rightList}">
					<view class="demo-water" v-for="(item, index) in rightList" :key="index">
						<up-lazy-load threshold="-350" border-radius="10" image="/static/logo.png"
							:index="index"></up-lazy-load>
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
			</up-waterfall>
		</view>
		<view v-if="showTopButton" @click="toTop" class="topClass">
			<up-icon name="arrow-upward" color="#fff" size="28"></up-icon>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		getBanner,
		getHomeList
	} from '../../api';
	import {
		onReady,
		onReachBottom,
		onPageScroll
	} from '@dcloudio/uni-app'

	const keyword = ref('')
	const banners = ref([])
	const flowList = ref([])
	const showTopButton = ref(false)
	const toTop = ()=>{
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 300
		})
	}
	onReady(async () => {
		const banner = await getBanner()
		banners.value = banner.data.data.bannerList
		const homeList = await getHomeList()
		flowList.value = homeList.data.data
	})

	onReachBottom(() => {
		console.log("触底了")
	})
	onPageScroll((e) => {
		if (e.scrollTop > 300) {
			showTopButton.value = true
		} else {
			showTopButton.value = false
		}
	})
	
	
</script>

<style lang="scss">
	.content {
		padding: 20rpx 20rpx;
	}

	.list {
		margin: 30rpx 0;

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
	}

	.topClass {
		position: fixed;
		bottom: 120rpx;
		right: 30rpx;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 20rpx;
		width: 44rpx;
		height: 44rpx;
		border-radius: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>