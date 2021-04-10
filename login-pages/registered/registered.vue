<template>
	<view class="registered-container">
		<u-gap height="64"></u-gap>
		<view class="title">欢迎</view>
		<view class="title">注册新账号</view>
		<u-gap height="100"></u-gap>
		<u-form :model="form" ref="myInfo" :error-type="errorType">
			<!-- 手机号 -->
			<u-form-item prop="phone"><u-input type="number" v-model="form.phone" placeholder="请输入手机号" :custom-style="inputStyle" /></u-form-item>
			<u-gap height="30"></u-gap>
			<!-- 验证码 -->
			<u-form-item prop="code">
				<u-input v-model="form.code" placeholder="请输入验证码" :custom-style="inputStyle" />
				<template #right>
					<text class="send-code" @click="getCode">{{ tip }}</text>
					<u-verification-code :seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
				</template>
			</u-form-item>
			<u-gap height="30"></u-gap>
			<!-- 设置密码 -->
			<u-form-item prop="password"><u-input type="password" v-model="form.password" placeholder="请设置密码（6-16数字字母组合）" :custom-style="inputStyle" /></u-form-item>
			<u-gap height="30"></u-gap>
			<!-- 确认密码 -->
			<u-form-item prop="againPassword"><u-input type="password" v-model="form.againPassword" placeholder="请再次输入密码" :custom-style="inputStyle" /></u-form-item>
			<u-gap height="30"></u-gap>
			<!-- 邀请码 -->
			<u-form-item prop="inviteCode"><u-input type="text" v-model="form.inviteCode" :custom-style="inputStyle" placeholder="请输入邀请码" /></u-form-item>
			<u-gap height="210"></u-gap>
			<u-button :custom-style="submitStyle" @click="submit">注册</u-button>
			<u-gap height="40"></u-gap>
			<view class="u-text-center">
				<text class="u-font-26 u-type-info">
					已注册用户点击
					<text class="u-type-primary u-p-10" @click="goDownLoad">立即下载</text>
				</text>
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
				inviteCode: ''
			},
			rules: {
				phone: [
					{
						required: true,
						message: '请输入手机号'
					},
					{
						validator: (rule, value, callback) => {
							return this.$u.test.mobile(value);
						},
						message: '您输入的手机号不合法'
					}
				],
				code: [
					{
						required: true,
						message: '请输入验证码'
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码'
					}
				],
				againPassword: [
					{
						required: true,
						message: '请输入密码'
					},
					{
						validator: (rule, value, callback) => {
							return this.$u.test.contains(value, this.form.password);
						},
						message: '您两次输入的密码不同'
					}
				],
				inviteCode: [
					{
						required: true,
						message: '请输入邀请码'
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
			inputStyle: {
				'font-size': '32rpx'
			},
			tip: ''
		};
	},
	onReady() {
		this.$refs.myInfo.setRules(this.rules);
	},
	methods: {
		codeChange(text) {
			this.tip = text;
		},
		getCode() {
			if (!this.$u.test.mobile(this.form.phone)) {
				this.$u.toast('请输入正确的手机号');
				return false;
			}
			if (this.$refs.uCode.canGetCode) {
				this.$u
					.post('app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=api.account.verifycode', {
						mobile: this.form.phone,
						temp: 'sms_reg'
					})
					.then(res => {
						this.$refs.uCode.start();
					});
			} else {
				this.$u.toast('倒计时结束后再发送');
			}
		},
		submit() {
			this.$refs.myInfo.validate(valid => {
				if (valid) {
					this.$u
						.post('app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=api.account.register', {
							mobile: this.form.phone,
							verifycode: this.form.code,
							pwd: this.form.password,
							parent: this.form.inviteCode
						})
						.then(res => {
							// #ifndef H5
							setTimeout(()=>{
								this.$u.route({
									type:'navigateBack',
									delta:1
								});
							},1600)
							// #endif
						});
				}
			});
		},
		goDownLoad(){
			this.$u.route('/h5-pages/download-app/download-app');
		}
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
	.u-form-item {
		padding: 0;
	}
	.send-code {
		font-size: 32rpx;
		color: #1f8bfb;
		letter-spacing: 0;
	}
}
</style>
