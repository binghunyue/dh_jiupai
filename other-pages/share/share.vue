<template>
	<view class="share-container">
		<view class="user-info u-flex">
			<u-avatar :src="$util.getStaticImg('Robotics_logo@2x.png')" size="116"></u-avatar>
			<view class="info-box">
				<text class="font-semibold">112xxxx3123</text>
				<text class="u-font-22">推荐人：182xxxx1321</text>
				<text class="u-font-22">初级会员</text>
			</view>
		</view>
		<view class="card u-flex"><text>我的邀请码：123123124</text></view>
		<view class="card font-block u-m-b-20">
			<text class="u-font-36 font-semibold u-type-warning">0 元</text>
			<text class="u-font-24">成功提现金额</text>
			<u-line margin="30rpx 0"></u-line>
			<text class="u-font-36 font-semibold u-type-warning">0.00 元</text>
			<text class="u-font-24">可提现金额</text>
			<view class="btn" @click="goWithdrawal">提现</view>
		</view>
		<u-grid :col="2">
			<u-grid-item>
				<view class="u-flex">
					<u-image :src="$util.getStaticImg('friend@2x.png')" width="58" height="58"></u-image>
					<view class="font-block u-m-l-20">
						<text>我的好友</text>
						<text class="u-font-24">0人</text>
					</view>
				</view>
			</u-grid-item>
			<u-grid-item>
				<view class="u-flex">
					<u-image :src="$util.getStaticImg('commission@2x.png')" width="58" height="58"></u-image>
					<view class="font-block u-m-l-20">
						<text>分享佣金/分享订单</text>
						<text class="u-font-24">0元/0个</text>
					</view>
				</view>
			</u-grid-item>
			<u-grid-item>
				<view class="u-flex">
					<u-image :src="$util.getStaticImg('detail_icon@2x.png')" width="58" height="58"></u-image>
					<view class="font-block u-m-l-20">
						<text>我的好友</text>
						<text class="u-font-24">0人</text>
					</view>
				</view>
			</u-grid-item>
			<u-grid-item>
				<view class="u-flex">
					<u-image :src="$util.getStaticImg('wallet@2x.png')" width="58" height="58"></u-image>
					<view class="font-block u-m-l-20">
						<text>今日分享/今日个人</text>
						<text class="u-font-24">0元/0个</text>
					</view>
				</view>
			</u-grid-item>
		</u-grid>
		<view class="card u-flex">
			<u-image :src="$util.getStaticImg('er_code@2x.png')" width="30" height="30"></u-image>
			<text class="u-p-l-20">推广二维码</text>
		</view>
		<u-tabbar v-model="current" :list="tablist" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			current: 0,
			tablist: [
				{
					pagePath: '/pages/index/index',
					iconPath: '/static/images/tab_icon_home_selected@2x.png',
					selectedIconPath: '/static/images/tab_icon_home@2x.png',
					text: '首页'
				},
				{
					pagePath: '/pages/integral/integral',
					iconPath: '/static/images/tab_icon_integral_selected@2x.png',
					selectedIconPath: '/static/images/tab_icon_integral@2x.png',
					text: '积分商城'
				},
				{
					pagePath: '/pages/member/member',
					iconPath: '/static/images/tab_icon_my_member@2x.png',
					selectedIconPath: '/static/images/tab_icon_my_member_selected@2x.png',
					text: '会员中心'
				}
			],
		};
	},
	methods:{
		goWithdrawal(){
			this.$u.route('/other-pages/withdrawal/commission');
		}
	}
};
</script>

<style lang="scss" scoped>
.share-container {
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top) - 120rpx);
	background-color: $u-bg-color;
}
.user-info {
	padding: 40rpx 24rpx;
	background: #fca33e;
	color: #f8f8f8;
	.info-box {
		margin-left: 16rpx;
		> text {
			display: block;
		}
	}
}
.card {
	background: #ffffff;
	box-shadow: 0 4rpx 8rpx 0 rgba(224, 215, 215, 0.15);
	border-radius: 6rpx;
	padding: 30rpx 24rpx;
	margin-top: 20rpx;
}
.font-block {
	position: relative;
	> text {
		display: block;
	}
	.btn {
		width: 100rpx;
		height: 56rpx;
		line-height: 56rpx;
		text-align: center;
		position: absolute;
		bottom: 46rpx;
		right: 24rpx;
		background: #f28701;
		border-radius: 29rpx;
		color: #f8f8f8;
	}
}
</style>
