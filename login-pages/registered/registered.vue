<template>
	<view class="registered-container">
		<u-gap height="64"></u-gap>
		<view class="title">欢迎</view>
		<view class="title">注册新账号</view>
		<u-gap height="100"></u-gap>
		<u-form :model="form" ref="myInfo" :error-type="errorType">
			<u-form-item prop="phone"><u-input type="number" v-model="form.phone" placeholder="请输入手机号" :custom-style="inputStyle" /></u-form-item>
			<u-gap height="30"></u-gap>
			<u-form-item prop="code">
				<u-input v-model="form.code" placeholder="请输入验证码" :custom-style="inputStyle"/>
				<template #right>
					<text class="send-code">发送验证码</text>
				</template>
			</u-form-item>
			<u-gap height="30"></u-gap>
			<u-form-item prop="password"><u-input type="password" v-model="form.password" placeholder="请设置密码（6-16数字字母组合）" :custom-style="inputStyle"/></u-form-item>
			<u-gap height="30"></u-gap>
			<u-form-item prop="againPassword"><u-input type="password" v-model="form.againPassword" placeholder="请再次输入密码" :custom-style="inputStyle"/></u-form-item>
			<u-gap height="30"></u-gap>
			<u-form-item><u-input type="text" v-model="form.inviteCode" :custom-style="inputStyle"/></u-form-item>
			<u-gap height="210"></u-gap>
			<u-button :custom-style="submitStyle" @click="submit">注册</u-button>
			<u-gap height="40"></u-gap>
			<view class="u-text-center">
				<text class="u-font-26 u-type-info">已注册用户点击<text class="u-type-primary u-p-10">立即下载</text></text>
			</view>
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
				againPassword: '',
				inviteCode:'39QH72EF'
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
				'background-color': '#000000',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '30rpx',
				color: '#F8F8F8',
				height: '90rpx'
			},
			inputStyle:{
				'font-size':'32rpx'
			}
		};
	},
	onReady() {
		this.$refs.myInfo.setRules(this.rules);
	}
};
</script>

<style lang="scss" scoped>
.registered-container {
	padding: 0 48rpx;
	.title {
		font-family: 'PingFangSC-Semibold';
		font-size: 44rpx;
		color: #282828;
		letter-spacing: 0;
		line-height: 66rpx;
	}
	.u-form-item{
		padding: 0;
	}
	.send-code {
		font-size: 32rpx;
		color: #1f8bfb;
		letter-spacing: 0;
	}
}
</style>
