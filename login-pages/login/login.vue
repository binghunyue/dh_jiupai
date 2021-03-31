<template>
	<view class="login-container">
		<u-gap height="140"></u-gap>
		<u-image width="120rpx" height="120rpx" src="@/static/images/Robotics_logo@2x.png"></u-image>
		<u-gap height="60"></u-gap>
		<view class="title">欢迎使用</view>
		<view class="title">东海久拍拍卖！</view>
		<u-gap height="120"></u-gap>
		<u-form :model="form" ref="myInfo" :error-type="errorType" :border-bottom="false">
			<u-form-item left-icon="/static/images/Robotics_zh@2x.png" :left-icon-style="iconStyle" prop="account" :border-bottom="false"><u-input v-model="form.account" /></u-form-item>
			<u-gap height="30"></u-gap>
			<u-form-item left-icon="/static/images/Robotics_mm@2x.png" :left-icon-style="iconStyle" prop="password" :border-bottom="false"><u-input v-model="form.password" /></u-form-item>
			<u-gap height="100"></u-gap>
			<u-button :custom-style="submitStyle" @click="submit">提交</u-button>
		</u-form>
		<u-gap height="50"></u-gap>
		<view class="u-flex u-row-center footer">
			<text>注册账号</text>
			<u-line color="#B2B2B2" direction="col" length="12px" margin="0 10px"/>
			<text>忘记密码</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				account: '',
				password: ''
			},
			errorType: ['none'],
			rules: {
				account: [
					{
						required: true,
						message: '请输入账号',
						// 可以单个或者同时写两个触发验证方式
						trigger: ['change', 'blur']
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: ['change', 'blur']
					}
				]
			},
			iconStyle: {
				width: '30rpx',
				height: '40rpx',
				'vertical-align': 'text-bottom'
			},
			submitStyle:{
				'background-color':'#111C3A',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '16px',
				'color': '#F8F8F8',
				height:'48px'
			}
		};
	},
	onReady() {
		this.$refs.myInfo.setRules(this.rules);
	},
	methods: {
		goLogin() {
			uni.navigateTo({
				url: '../../login-pages/login/login'
			});
		},
		submit() {
			this.$refs.myInfo.validate(valid => {
				if (valid) {
					console.log('验证通过');
				} else {
					console.log('验证失败');
				}
			});
		}
	}
};
</script>

<style lang="scss">
.login-container {
	padding: 0 50rpx;
	.title {
		font-family: 'PingFangSC-Semibold';
		font-size: 48rpx;
		color: #282828;
		letter-spacing: 0;
		line-height: 66rpx;
	}
	.u-form-item{
		background: #F5F9FC;
		box-shadow: 0 4rpx 10rpx 0 #FFFFFF;
		border-radius: 6rpx;
		padding: 10rpx 26rpx;
	}
	.footer{
		>text{
			font-family: PingFangSC-Regular;
			font-size: 26rpx;
			color: #B2B2B2;
			letter-spacing: 0;
		}
	}
}
</style>
