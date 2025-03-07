<template>
	<view class="content">
		<up-search placeholder="搜索景点" bgColor="#e3e3e3" v-model="keyword" />
		<up-swiper v-if="banners.length" :list="banners" keyName="image" showTitle circular />
		<up-notice-bar text="这只是测试"></up-notice-bar>
		
		<view class="list">
			<up-waterfall v-model="flowList" ref="uWaterfallRef">
				<template v-slot:left="{leftList}">
					<WaterfallView :items="leftList" />
				</template>
				<template v-slot:right="{rightList}">
						<WaterfallView :items="rightList" />
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
	
	import WaterfallView from '@/components/waterfallView/WaterfallView.vue'
	
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

<style>
	page{
		background-color: rgb(240, 240, 240);
	}
</style>
<style lang="scss">
	.content {
		padding: 20rpx 20rpx;
	}

	.list {
		margin: 30rpx 0;
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