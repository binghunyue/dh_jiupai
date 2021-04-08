<template>
	<view class="agreement-container">
		<view class="card" v-for="(item,index) in list" :key="index">
			{{item}}
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list:['《注册协议》','《隐私政策》','《风险提示》','《抢购规则》']
		};
	}
};
</script>
<style lang="scss">
page {
	background-color: $u-bg-color;
}
.agreement-container{
	padding: 0 24rpx;
}
.card{
	background: #FFFFFF;
	box-shadow: 0 4rpx 8rpx 0 rgba(224,215,215,0.15);
	border-radius: 6rpx;
	margin-top: 20rpx;
	padding: 30rpx;
	color: #E21A1A;
}
</style>
