<template>
	<view class="reset-container">
		<u-gap height="60"></u-gap>
		<u-form :model="form" ref="myInfo" :error-type="errorType" :border-bottom="false">
			<u-form-item prop="phone" :border-bottom="false"><u-input type="number" v-model="form.phone" placeholder="请输入手机号" /></u-form-item>
			<u-gap height="30"></u-gap>
			<u-form-item prop="code" :border-bottom="false">
				<u-input v-model="form.code" placeholder="请输入验证码"/>
				<template #right>
					<text class="send-code">发送验证码</text>
				</template>
			</u-form-item>
			<u-gap height="30"></u-gap>
			<u-form-item prop="password" :border-bottom="false"><u-input type="password" v-model="form.password" placeholder="请输入密码" /></u-form-item>
			<u-gap height="30"></u-gap>
			<u-form-item prop="againPassword" :border-bottom="false"><u-input type="password" v-model="form.againPassword" placeholder="请再次输入密码" /></u-form-item>
			<u-gap height="100"></u-gap>
			<u-button :custom-style="submitStyle" @click="submit">确认</u-button>
		</u-form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			errorType: ['toast'],
			form: {
				phone: '',
				code: '',
				password: '',
				againPassword: ''
			},
			rules: {
				phone: [
					{
						required: true,
						message: '请输入手机号',
						trigger: ['change', 'blur']
					},
					{
						validator: (rule, value, callback) => {
							return this.$u.test.mobile(value);
						},
						message: '您输入的手机号不合法',
						trigger: 'blur'
					}
				],
				code: [
					{
						required: true,
						message: '请输入验证码',
						trigger: ['change', 'blur']
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						trigger: ['change', 'blur']
					}
				],
				againPassword: [
					{
						required: true,
						message: '请输入密码',
						trigger: ['change', 'blur']
					}
				]
			},
			submitStyle: {
				'background-color': '#111C3A',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '32rpx',
				color: '#F8F8F8',
				height: '96rpx'
			}
		};
	},
	onReady() {
		this.$refs.myInfo.setRules(this.rules);
	}
};
</script>

<style lang="scss" scoped>
.reset-container {
	padding: 0 48rpx;
	.u-form-item {
		background: #f5f9fc;
		box-shadow: 0 4rpx 10rpx 0 #ffffff;
		border-radius: 6rpx;
		padding: 10rpx 26rpx;
	}
	.send-code{
		font-size: 28rpx;
		color: #1F8BFB;
		letter-spacing: 0;
	}
}
</style>
