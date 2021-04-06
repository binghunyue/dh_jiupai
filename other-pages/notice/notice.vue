<template>
	<view class="notice-container">
		<u-navbar :is-back="false" title="公告" title-bold title-size="32" title-color="#282828" :border-bottom="false"></u-navbar>
		<view class="card-item" v-for="(item, index) in dataList" :key="index">
			<u-image width="184rpx" height="142rpx" :src="item.image" border-radius="10"></u-image>
			<view class="item-info">
				<text class="u-font-30">{{ item.title }}</text>
				<view class="u-type-info-dark u-font-24 u-flex">
					<text class="u-line-1 u-flex-1">{{ item.detail }}</text>
					<text class="u-row-right">{{ item.time }}</text>
				</view>
			</view>
		</view>
		<u-tabbar v-model="current" :list="tablist" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dataList: [
				{
					image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					title: '东皇久拍，盛大起航！',
					detail: '东皇久拍运营部',
					time: '2021-02-01'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					title: '东皇久拍，盛大起航！',
					detail: '东皇久拍运营部',
					time: '2021-02-01'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					title: '东皇久拍，盛大起航！',
					detail: '东皇久拍运营部',
					time: '2021-02-01'
				}
			],
			tablist: [
				{
					"pagePath":"/pages/index/index",
					"iconPath":"/static/images/tab_icon_home_selected@2x.png",
					"selectedIconPath":"/static/images/tab_icon_home@2x.png",
					"text":"首页",
				},
				{
					"pagePath":"/pages/integral/integral",
					"iconPath":"/static/images/tab_icon_integral_selected@2x.png",
					"selectedIconPath":"/static/images/tab_icon_integral@2x.png",
					"text":"积分商城",
				},
				{
					"pagePath":"/pages/member/member",
					"iconPath":"/static/images/tab_icon_my_member@2x.png",
					"selectedIconPath":"/static/images/tab_icon_my_member_selected@2x.png",
					"text":"会员中心",
				}
			],
			current: 0
		};
	}
};
</script>

<style lang="scss" scoped>
.notice-container {
	width: 100vw;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
	background: $u-bg-color;
	overflow: hidden;
}
.card-item {
	display: flex;
	align-items: center;
	width: 662rpx;
	height: 182rpx;
	padding: 20rpx;
	background: #ffffff;
	box-shadow: 0px 4rpx 8rpx 0rpx rgba(224, 215, 215, 0.15);
	border-radius: 6rpx;
	margin: 20rpx auto;
	.item-info {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 20rpx;
		height: -webkit-fill-available;
		overflow: hidden;
	}
}
</style>
