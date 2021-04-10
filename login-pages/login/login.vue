<template>
	<view class="login-container">
		<u-gap height="140"></u-gap>
		<u-image width="120rpx" height="120rpx" src="@/static/images/Robotics_logo@2x.png"></u-image>
		<u-gap height="60"></u-gap>
		<view class="title">欢迎使用</view>
		<view class="title">东海久拍拍卖！</view>
		<u-gap height="120"></u-gap>
		<u-form :model="form" ref="myInfo" :error-type="errorType" :border-bottom="false">
			<u-form-item left-icon="/static/images/Robotics_zh@2x.png" :left-icon-style="iconStyle" prop="account" :border-bottom="false">
				<u-input v-model="form.account" placeholder="请输入账号" />
			</u-form-item>
			<u-gap height="30"></u-gap>
			<u-form-item left-icon="/static/images/Robotics_mm@2x.png" :left-icon-style="iconStyle" prop="password" :border-bottom="false">
				<u-input type="password" v-model="form.password" placeholder="请输入密码" />
			</u-form-item>
			<u-gap height="100"></u-gap>
			<u-button :custom-style="submitStyle" @click="submit">提交</u-button>
		</u-form>
		<u-gap height="50"></u-gap>
		<view class="u-flex u-row-center footer">
			<text @click="registered">注册账号</text>
			<u-line color="#B2B2B2" direction="col" length="12px" margin="0 20rpx" />
			<text @click="forgetPassword">忘记密码</text>
		</view>
		<u-popup v-model="informBook" mode="center" border-radius="10" width="642" height="940">
			<view class="u-padding-60 u-text-center">
				<text class="font-semibold u-font-36">告知书</text>
				<u-gap height="40"></u-gap>
				<scroll-view scroll-y="true" class="content"><rich-text nodes=""></rich-text></scroll-view>
				<u-gap height="40"></u-gap>
				<u-button :custom-style="agreeStyle">同意</u-button>
				<u-gap height="10"></u-gap>
				<u-button :custom-style="noAgreeStyle" :hair-line="false">不同意</u-button>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 18156825246   123456（测试）
			form: {
				account: '',
				password: ''
			},
			errorType: ['toast'],
			rules: {
				account: [
					{
						required: true,
						message: '请输入账号'
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码'
					}
				]
			},
			iconStyle: {
				width: '30rpx',
				height: '40rpx',
				'vertical-align': 'text-bottom'
			},
			submitStyle: {
				'background-color': '#111C3A',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '32rpx',
				color: '#F8F8F8',
				height: '96rpx'
			},
			agreeStyle: {
				'background-color': '#111C3A',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '28rpx',
				color: '#F8F8F8',
				width: '530rpx',
				height: '80rpx'
			},
			noAgreeStyle: {
				'background-color': 'transparent',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '28rpx',
				color: '#282828',
				width: '530rpx',
				height: '80rpx',
				border: 'none'
			},
			informBook: true // 是否显示告知书弹窗
		};
	},
	onReady() {
		this.$refs.myInfo.setRules(this.rules);
	},
	methods: {
		registered() {
			this.$u.route('/login-pages/registered/agreement');
		},
		forgetPassword() {
			this.$u.route('/login-pages/reset-password/reset-password');
		},
		submit() {
			this.$refs.myInfo.validate(valid => {
				if (valid) {
					this.$u
						.post('app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=api.account.login', {
							mobile: this.form.account,
							pwd: this.form.password
						})
						.then(res => {
							let lifeData = {
								vuex_token: res.token
							};
							uni.setStorageSync('lifeData', lifeData);
							this.$u.route({
								type:'reLaunch',
								url:'/pages/index/index'
							})
						});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.login-container {
	padding: 0 50rpx;
	.title {
		font-family: 'PingFangSC-Semibold';
		font-size: 48rpx;
		color: #282828;
		letter-spacing: 0;
		line-height: 66rpx;
	}
	.u-form-item {
		background: #f5f9fc;
		box-shadow: 0 4rpx 10rpx 0 #ffffff;
		border-radius: 6rpx;
		padding: 10rpx 26rpx;
	}
	.footer {
		> text {
			font-size: 26rpx;
			color: #b2b2b2;
			letter-spacing: 0;
		}
	}
	.content {
		width: 532rpx;
		height: 560rpx;
	}
}
</style>
