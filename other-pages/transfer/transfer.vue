<template>
	<view class="transfer-container">
		<view class="card">
			<text class="u-font-32 font-semibold">目标手机号</text>
			<view class="u-flex u-m-t-50">
				<u-input v-model="phone" placeholder="请输入目标账户手机号码" height="40"></u-input>
				<text class="u-type-primary">验证姓名</text>
			</view>
		</view>
		<view class="card u-m-t-20">
			<text class="u-font-32 font-semibold">目标用户信息</text>
			<view class="u-type-error u-m-t-30">核对信息：UID 5013802</view>
			<view class="u-type-error u-m-t-16">昵称：UID 5013802</view>
		</view>
		<view class="card u-m-t-20">
			<text class="u-font-32 font-semibold">目标手机号</text>
			<view class="u-font-24 u-m-t-10">
				最少转出数量限制为100积分
			</view>
			<view class="u-flex u-m-t-50">
				<u-input v-model="num" placeholder="数量" height="50" class="num"></u-input>
			</view>
			<u-gap height="29"></u-gap>
			<u-line length="662"></u-line>
			<u-gap height="29"></u-gap>
			<view class="u-flex u-font-24">
				<u-image :src="$util.getStaticImg('Robotics_zy@2x.png')" width="26" height="26"></u-image>
				<text class="u-p-l-16">可转出数量</text>
				<text class="u-type-warning u-p-l-14">0.00积分</text>
			</view>
			<view class="u-font-24 u-m-t-16">账号互转数量必须为100的整数倍</view>
		</view>
		<u-button @click="submit" :custom-style="submitBtnStyle" :hair-line="false">确认转出</u-button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				phone:'',
				num:'',
				submitBtnStyle: {
					position: 'absolute',
					bottom: '50rpx',
					width: '702rpx',
					background: '#0C1E3C',
					'border-radius': '6rpx',
					color: '#F8F8F8',
					border: 'none',
					'font-family': 'PingFangSC-Semibold',
					'font-size': '28rpx'
				},
			}
		}
	}
</script>

<style lang="scss">
.transfer-container {
	padding: 20rpx 24rpx;
	background-color: $u-bg-color;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
	.card {
		padding: 30rpx 20rpx;
		background: #ffffff;
		box-shadow: 0 4rpx 8rpx 0 rgba(224, 215, 215, 0.15);
		border-radius: 6rpx;
	}
}

/deep/ .u-input.num{
	.u-input__input{
		font-size: 36rpx;
	}
}
</style>
