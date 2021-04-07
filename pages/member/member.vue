<template>
	<view class="member-container u-relative">
		<u-navbar :is-back="false" title="我的" :background="navBackground" title-color="#F8F8F8" :border-bottom="false">
			<template #right>
				<u-image :src="$util.getStaticImg('set@2x.png')" width="36" height="36" class="u-m-r-30"></u-image>
			</template>
		</u-navbar>
		<view class="palette"></view>
		<u-gap height="30"></u-gap>
		<view class="card">
			<view class="u-flex">
				<u-avatar :src="$util.getStaticImg('Robotics_logo@2x.png')" size="116"></u-avatar>
				<view class="u-m-l-24">
					<view class="u-font-36 font-semibold">杜秀英</view>
					<text class="u-font-28 u-type-info">19320625035</text>
				</view>
			</view>
			<u-gap height="40"></u-gap>
			<u-line></u-line>
			<u-gap height="13"></u-gap>
			<u-row justify="between">
				<u-col span="4" justify="center" class="u-flex u-row-center">
					<u-image :src="$util.getStaticImg('icon_applets_group_big@2x.png')" width="44" height="44"></u-image>
					<view class="u-p-l-14 u-text-center">
						<text class="u-font-20">转拍积分</text>
						<view class="u-font-32">0.00</view>
						<text class="u-font-22 u-type-success">充值</text>
					</view>
				</u-col>
				<u-col span="4" justify="between" class="u-flex">
					<u-line direction="col" length="24"></u-line>
					<view class="u-flex u-row-center">
						<u-image :src="$util.getStaticImg('subscribe@2x.png')" width="44" height="44"></u-image>
						<text class="u-font-22 u-p-l-14">预约</text>
					</view>
					<u-line direction="col" length="24"></u-line>
				</u-col>
				<u-col span="4" justify="center" class="u-flex">
					<u-image :src="$util.getStaticImg('make_over@2x.png')" width="44" height="44"></u-image>
					<text class="u-font-22 u-p-l-14">转让积分</text>
				</u-col>
			</u-row>
		</view>
		<view class="card u-m-t-14">
			<view class="u-flex" @click="goToPage('buyOrder')">
				<u-image :src="$util.getStaticImg('buy_icon@2x.png')" width="44" height="44"></u-image>
				<text class="u-p-l-34">我的买单</text>
			</view>
			<u-line margin="29rpx 0"></u-line>
			<view class="u-flex" @click="goToPage('sellOrder')">
				<u-image :src="$util.getStaticImg('sell_icon@2x.png')" width="44" height="44"></u-image>
				<text class="u-p-l-34">我的卖单</text>
			</view>
		</view>
		<view class="card u-m-t-14">
			<view class="u-flex" @click="goToPage('earnings')">
				<u-image :src="$util.getStaticImg('icon_my_incom@2x.png')" width="44" height="44"></u-image>
				<text class="u-p-l-34">收益</text>
			</view>
			<u-line margin="29rpx 0"></u-line>
			<view class="u-flex">
				<u-image :src="$util.getStaticImg('icon_my_income@2x.png')" width="44" height="44"></u-image>
				<text class="u-p-l-34">收款码</text>
				<view class="u-flex-1 u-text-right"><text class="finished">已完善</text></view>
			</view>
		</view>
		<view class="card u-m-t-14">
			<view class="u-flex" @click="goToPage('perfect-info')">
				<u-image :src="$util.getStaticImg('icon_my_zl@2x.png')" width="44" height="44"></u-image>
				<text class="u-p-l-34">完善资料</text>
				<view class="u-flex-1 u-text-right"><text class="unfinished">待认证</text></view>
			</view>
			<u-line margin="29rpx 0"></u-line>
			<view class="u-flex" @click="goToPage('address')">
				<u-image :src="$util.getStaticImg('shipping_address@2x.png')" width="44" height="44"></u-image>
				<text class="u-p-l-34">收货地址</text>
			</view>
		</view>
		<view class="card u-m-t-14">
			<view class="u-flex">
				<u-image :src="$util.getStaticImg('share@2x.png')" width="44" height="44"></u-image>
				<text class="u-p-l-34">邀请好友</text>
			</view>
			<u-line margin="29rpx 0"></u-line>
			<view class="u-flex">
				<u-image :src="$util.getStaticImg('order@2x.png')" width="44" height="44"></u-image>
				<text class="u-p-l-34">提货订单</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			navBackground: {
				background: '#0C1E3C'
			}
		};
	},
	methods: {
		goBuyOrder() {
			this.$u.route('/other-pages/order/buy-order');
		},
		goSellOrder() {
			this.$u.route('/other-pages/order/sell-order');
		},
		/* 跳转到对应的页面 */
		goToPage(type) {
			switch (type) {
				case 'earnings':
					this.$u.route('/other-pages/earnings/detail');
					break;
				case 'buyOrder':
					this.$u.route('/other-pages/order/buy-order');
					break;
				case 'sellOrder':
					this.$u.route('/other-pages/order/sell-order');
					break;
				case 'address':
					this.$u.route('/other-pages/address/address');
					break;
				case 'perfect-info':
					this.$u.route('/other-pages/perfect-information/perfect-information');
					break;
			}
		}
	}
};
</script>

<style lang="scss">
.member-container {
	width: 100vw;
	background: $u-bg-color;
}
.palette {
	width: 100vw;
	height: 252rpx;
	background: #0c1e3c;
	position: absolute;
	z-index: 0;
}
.card {
	position: relative;
	width: 690rpx;
	background: #ffffff;
	box-shadow: 0px 4rpx 8rpx 0px rgba(224, 215, 215, 0.15);
	border-radius: 24rpx;
	margin: auto;
	z-index: 1;
	padding: 40rpx 30rpx 30rpx;
	.unfinished {
		font-size: 24rpx;
		padding: 4rpx 12rpx;
		border: 2rpx solid #e21a1a;
		border-radius: 6rpx;
		color: #e21a1a;
	}
	.finished {
		font-size: 24rpx;
		padding: 4rpx 12rpx;
		border: 2rpx solid #8c8c8c;
		border-radius: 6rpx;
		color: #8c8c8c;
	}
}
</style>
