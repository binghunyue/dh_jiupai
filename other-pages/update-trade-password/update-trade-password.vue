<template>
	<view class="trade-password-container">
		<u-form :model="uForm" ref="tradePassword" :error-type="['toast']">
			<u-form-item prop="phone" class="from-item" :border-bottom="false"><u-input v-model="uForm.phone" placeholder="请输入手机号码" /></u-form-item>
			<u-form-item prop="code" class="from-item" :border-bottom="false">
				<u-input v-model="uForm.code" placeholder="验证码" />
				<template #right>
					<text class="sendCode" @click="getCode">{{ tip }}</text>
					<u-verification-code :seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
				</template>
			</u-form-item>
			<u-form-item prop="password" class="from-item" :border-bottom="false"><u-input v-model="uForm.password" placeholder="请输入新交易密码" /></u-form-item>
			<u-form-item prop="againPassword" class="from-item" :border-bottom="false"><u-input v-model="uForm.againPassword" placeholder="请再次输入密码" /></u-form-item>
		</u-form>
		<u-button @click="submit" :custom-style="submitBtnStyle" :hair-line="false">确认</u-button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tip: '',
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
			uForm: {
				phone: '',
				code: '',
				password:'',
				againPassword:''
			},
			rule:{
				phone:[
					{
						required:true,
						message:'请输入手机号'
					},
					{
						validator:(rule,value,callback) =>{
							return this.$u.test.mobile(value);
						},
						message: '您输入手机号不正确',
					}
				],
				code:[
					{
						required:true,
						message:'请输入验证码'
					},
					{
						validator: (rule, value, callback) => {
							return this.$u.test.code(value,4);
						},
						message: '请输入正确的验证码',
					}
				],
				password:[
					{
						required:true,
						message:'请输入密码'
					},
				],
				againPassword:[
					{
						required:true,
						message:'请再次输入密码'
					},
					{
						validator:(rule,value,callback) =>{
							return this.$u.test.contains(value,this.uForm.password);
						},
						message: '您输入的两次密码不同',
					}
				]
			}
		};
	},
	onReady() {
		this.$refs.tradePassword.setRules(this.rule);
	},
	methods: {
		codeChange(text) {
			this.tip = text;
		},
		getCode() {
			if (this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				});
				setTimeout(() => {
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					this.$u.toast('验证码已发送');
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 2000);
			} else {
				this.$u.toast('倒计时结束后再发送');
			}
		},
		submit() {
			this.$refs.tradePassword.validate(valid => {
				if (valid) {
					console.log('验证通过');
				} else {
					console.log('验证失败');
				}
			});
		},
	}
};
</script>

<style lang="scss">
.trade-password-container {
	background-color: $u-bg-color;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
	padding: 0 24rpx;
	overflow: hidden;
	.from-item {
		background: #FFFFFF;
		box-shadow: 0 4rpx 10rpx 0 rgba(224,215,215,0.15);
		border-radius: 6rpx;
		padding: 14rpx 30rpx;
		margin-top: 30rpx;
	}
	.sendCode {
		font-size: 28rpx;
		color: #1f8bfb;
		letter-spacing: 0;
	}
}
</style>
