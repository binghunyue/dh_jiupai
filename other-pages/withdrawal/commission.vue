<template>
	<view class="commission-container">
		<view class="u-m-t-30 u-m-l-24">
			<text>可提现金额：¥ 0.00</text>
			<text>全部提现</text>
		</view>
		<view class="card u-m-t-30">
			<text>提现金额</text>
			<u-form :model="withdrawal_money_form" ref="withdrawal_money" :error-type="['toast']">
				<u-form-item prop="money" label="¥" :label-style="{ 'font-size': '42rpx' }">
					<u-input type="digit" v-model="withdrawal_money_form.money" placeholder=" " />
				</u-form-item>
				<u-form-item prop="password" label="安全密码" label-width="150" :border-bottom="false">
					<u-input v-model="withdrawal_money_form.password" type="password" placeholder="请填写安全密码" />
				</u-form-item>
			</u-form>
		</view>
		<view class="card u-m-t-20 u-p-b-30">
			<text>提现方式</text>
			<u-gap height="50"></u-gap>
			<radio-group @change="radioChange">
				<view v-for="(item, index) in withdrawal_type" :key="index" class="u-flex u-m-b-20">
					<u-image :src="item.imgUrl" width="40" height="40"></u-image>
					<text class="u-m-l-20 font-semibold u-flex-1">{{ item.name }}</text>
					<radio :value="item.value" :checked="index === current" style="transform:scale(0.7)" />
				</view>
			</radio-group>
			<u-line margin="30rpx 0"></u-line>
			<text>最小提现金额为 ¥ 100</text>
			<u-gap height="60"></u-gap>
			<u-button :custom-style="isDisabled ? grayBtnStyle : redBtnStyle" :disabled="isDisabled" :hair-line="false" @click="submit">提现</u-button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			withdrawal_money_form: {
				money: '',
				password: ''
			},
			rule: {
				money: [
					{
						required: true,
						message: '请输入需要提现的金额'
					},
					{
						validator: (rule, value, callback) => {
							return this.$u.test.amount(value);
						},
						message: '请输入正确的金额'
					}
				]
			},
			withdrawal_type: [
				{
					imgUrl: '/static/images/rmb@2x.png',
					name: '提现到到转拍积分',
					value: 'point'
				}
			],
			current: -1,
			isDisabled: true,
			grayBtnStyle: {
				width: '702rpx',
				height: '90rpx',
				background: '#cacaca',
				'border-radius': '6rpx',
				color: '#f8f8f8',
				border: 'none'
			},
			redBtnStyle: {
				width: '702rpx',
				height: '90rpx',
				background: '#E21A1A',
				'border-radius': '6rpx',
				color: '#f8f8f8',
				border: 'none'
			}
		};
	},
	onReady() {
		this.$refs.withdrawal_money.setRules(this.rule);
	},
	methods: {
		radioChange: function(evt) {
			for (let i = 0; i < this.withdrawal_type.length; i++) {
				if (this.withdrawal_type[i].value === evt.target.value) {
					this.current = i;
					break;
				}
			}
		},
		submit() {
			this.$refs.withdrawal_money.validate(valid => {
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
.commission-container {
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top) - 120rpx);
	background-color: $u-bg-color;
	overflow: hidden;
}
.card {
	padding: 30rpx 24rpx 0;
	background: #ffffff;
	box-shadow: 0 4rpx 8rpx 0 rgba(224, 215, 215, 0.15);
	border-radius: 6rpx;
	overflow: hidden;
}
</style>
