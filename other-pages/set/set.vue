<template>
	<view class="set-container">
		<view class="card u-flex u-row-between u-m-t-20 u-p-t-30 u-p-b-30">
			<u-image :src="$util.getStaticImg('Robotics_logo@2x.png')" width="170" height="170" border-radius="50%"></u-image>
			<view class="">
				<text>修改头像</text>
				<u-icon name="arrow-right" color="#8C8C8C" size="28"></u-icon>
			</view>
		</view>
		<view class="card u-m-t-20">
			<u-cell-group :border="false">
				<u-cell-item title="昵称" :title-style="{color:'#282828'}"></u-cell-item>
				<u-cell-item title="联系人手机号" :title-style="{color:'#282828'}"></u-cell-item>
				<u-cell-item title="登录密码" :title-style="{color:'#282828'}"></u-cell-item>
				<u-cell-item title="交易密码" :title-style="{color:'#282828'}" @click="goUpdateTradePassword"></u-cell-item>
				<u-cell-item title="清除缓存" :title-style="{color:'#282828'}"></u-cell-item>
				<u-cell-item title="平台协议" :title-style="{color:'#282828'}" :border-bottom="false" @click="goAgreement"></u-cell-item>
			</u-cell-group>
		</view>
		<view class="footer">
			<u-button type="error" :custom-style="btnStyle">退出登录</u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			btnStyle:{
				width:'702rpx',
				height:'90rpx'
			}
		};
	},
	methods:{
		goUpdateTradePassword(){
			this.$u.route('/other-pages/update-trade-password/update-trade-password')
		},
		goAgreement(){
			this.$u.route('/other-pages/agreement/agreement')
		}
	}
};
</script>

<style lang="scss">
.set-container {
	background-color: $u-bg-color;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
	padding: 0 24rpx;
	overflow: hidden;
}
.card {
	background: #ffffff;
	padding: 0 30rpx;
	box-shadow: 0 2px 4px 0 rgba(224, 215, 215, 0.15);
}

.footer{
	position: fixed;
	bottom: 50rpx;
}

/deep/ .u-cell{
	padding: 22rpx 0;
}
</style>
