<template>
	<view class="buy-order-container">
		<view>
			<u-tabs-swiper
				ref="uTabs"
				:list="list"
				:current="current"
				@change="tabsChange"
				:is-scroll="false"
				swiperWidth="750"
				font-size="26"
				active-color="#FF2D52"
				inactive-color="#8C8C8C"
				bar-width="68"
				bar-height="4"
			></u-tabs-swiper>
		</view>
		<u-gap height="20"></u-gap>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" class="swiper-box">
			<swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
				<scroll-view scroll-y style="height: 100%;" @scrolltolower="onreachBottom">
					<view class="card" v-for="(item, index) in dataList" :key="index">
						<view class="u-type-info u-flex u-row-between">
							<text>订单号:{{ item.orderNum }}</text>
							<text>{{ item.status }}</text>
						</view>
						<view class="content u-flex">
							<u-image :src="item.imageUrl" width="190" height="190" border-radius="10"></u-image>
							<view class="u-m-l-20 u-flex-1 u-flex-col" style="height: 180rpx;">
								<view class="u-flex u-row-between font-semibold">
									<text class="u-line-1">JB100817…</text>
									<text>
										买入价:
										<text class="u-type-error">¥{{ item.buyingRate }}</text>
									</text>
								</view>
								<view class="font-semibold u-text-right u-m-t-10">
									转拍价: <text class="u-type-error">¥2000</text>
								</view>
								<view class="font-semibold u-text-right u-m-t-10">
									应收: <text class="u-type-error">¥2000</text>
								</view>
							</view>
						</view>
						<view class="operation u-flex">
							<text class="u-flex-1">{{ item.time }}</text>
							<u-button shape="circle" :custom-style="grayBtnStyle" v-if="item.status == '待被买'">待被买</u-button>
							<u-button shape="circle" :custom-style="redBtnStyle" v-else-if="item.status == '待收款'" @click="goCollection('default')">待收款</u-button>
							<u-button shape="circle" :custom-style="redBtnStyle" v-else-if="item.status == '待确认收款'" @click="goCollection('confirm')">待确认收款</u-button>
							<u-button shape="circle" :custom-style="redBtnStyle" v-else-if="item.status == '已完成'">已完成</u-button>
						</view>
					</view>
					<u-gap height="110"></u-gap>
				</scroll-view>
			</swiper-item>
		</swiper>
		<u-empty text="暂无订单" src="/static/images/Empty_bro@2x.png" icon-size="324" :show="dataList.length == 0"></u-empty>
		<view class="sorter u-flex"><diy-sorter :total="pagination"></diy-sorter></view>
	</view>
</template>

<script>
import diySorter from '@/components/diy-sorter/diy-sorter.vue';
export default {
	components: { diySorter },
	data() {
		return {
			list: [
				{
					name: '全部'
				},
				{
					name: '待被买'
				},
				{
					name: '待收款'
				},
				{
					name: '待确认收款'
				},
				{
					name: '已完成'
				}
			],
			// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
			current: 0, // tabs组件的current值，表示当前活动的tab选项
			swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			dataList: [
				{
					orderNum: 'PM22312312312312312312',
					status: '待被买',
					buyingRate: 2000,
					realPay: 200,
					num: 1,
					time: '2021-03-01 09:24:22'
				},
				{
					orderNum: 'PM22312312312312312312',
					status: '待收款',
					buyingRate: 2000,
					realPay: 200,
					num: 1,
					time: '2021-03-01 09:24:22'
				},
				{
					orderNum: 'PM22312312312312312312',
					status: '待确认收款',
					buyingRate: 2000,
					realPay: 200,
					num: 1,
					time: '2021-03-01 09:24:22'
				},
				{
					orderNum: 'PM22312312312312312312',
					status: '已完成',
					buyingRate: 2000,
					realPay: 200,
					num: 1,
					time: '2021-03-01 09:24:22'
				}
			],
			grayBtnStyle: {
				height: '64rpx',
				margin: 0,
				padding: '12rpx 24rpx',
				color: '#8c8c8c',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '28rpx'
			},
			redBtnStyle: {
				height: '64rpx',
				margin: '0 0 0 20rpx',
				padding: '12rpx 24rpx',
				color: '#E21A1A',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '28rpx'
			},
			greenBtnStyle: {
				height: '64rpx',
				margin: '0 0 0 20rpx',
				padding: '12rpx 24rpx',
				color: '#008100',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '28rpx'
			},
			pagination: 4
		};
	},
	methods: {
		// tabs通知swiper切换
		tabsChange(index) {
			this.swiperCurrent = index;
		},
		// swiper-item左右移动，通知tabs的滑块跟随移动
		transition(e) {
			let dx = e.detail.dx;
			this.$refs.uTabs.setDx(dx);
		},
		// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
		// swiper滑动结束，分别设置tabs和swiper的状态
		animationfinish(e) {
			let current = e.detail.current;
			this.$refs.uTabs.setFinishCurrent(current);
			this.swiperCurrent = current;
			this.current = current;
		},
		// scroll-view到底部加载更多
		onreachBottom() {},
		goCollection(type) {
			this.$u.route('/other-pages/pay/collection',{type});
		}
	}
};
</script>

<style lang="scss">
.buy-order-container {
	background: #fafafa;
}
.swiper-box {
	height: calc(100vh - 100rpx - var(--status-bar-height) - var(--window-top)) !important;
	.card {
		background: #ffffff;
		box-shadow: 0 4rpx 8rpx 0 rgba(224, 215, 215, 0.15);
		border-radius: 6rpx;
		padding: 24rpx 24rpx 18rpx;
		margin-bottom: 20rpx;
		.content {
			padding: 28rpx 0;
			margin: 30rpx 0;
			border: {
				top: 1px solid #eaeaea;
				bottom: 1px solid #eaeaea;
			}
		}
	}
}
.sorter {
	width: 100vw;
	height: 100rpx;
	background: #ffffff;
	position: fixed;
	bottom: 0;
}
</style>
