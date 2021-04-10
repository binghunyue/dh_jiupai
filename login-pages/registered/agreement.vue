<template>
	<view class="agreement-container">
		<rich-text nodes=""></rich-text>
		<u-button :custom-style="submitStyle" @click="submit">我已阅读并同意此协议</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			submitStyle: {
				'background-color': '#000000',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '30rpx',
				color: '#F8F8F8',
				width:'702rpx',
				height: '90rpx',
				position: 'fixed',
				bottom: '50rpx',
				left:'50%',
				transform: 'translateX(-50%)'
			}
		};
	},
	methods:{
		submit(){
			this.$u.route({
				type:'redirectTo',
				url:'/login-pages/registered/registered'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.agreement-container{
		padding-bottom: 160rpx;
	}
</style>
