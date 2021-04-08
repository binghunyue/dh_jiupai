<template>
	<view class="payment-wechat-container">
		<u-gap height="30"></u-gap>
		<view class="u-flex tab-box">
			<view v-for="(item,index) in tabsList" :key="index" class="tab-item" :class="{active:activeIndex == index}">
				{{item}}
			</view>
		</view>
		<text class="u-type-error u-font-24">风险提示：转拍属于C2C交易，资金不经过平台，平台不会自动扣款，需要您手动自行转账给对方，对方才能收到款项。</text>
		<view class="card u-flex u-p-t-30 u-p-b-30 u-m-t-30">
			<text class="u-m-r-32">微信收款码</text>
			<text class="u-type-info" style="margin-right: 134rpx;">点我修改图片</text>
			<view class="box u-flex u-row-center">
				<u-image :src="$util.getStaticImg('Robotics_add_small@2x.png')" width="30" height="30"></u-image>
			</view>
		</view>
		<view class="card u-m-t-20">
			<u-form :model="form" ref="formRef" :error-type="['toast']">
				<u-form-item label="微信账号" label-width="200" prop="wechatNum" class="from-item">
					<u-input v-model="form.wechatNum" placeholder="请输入微信账号" />
				</u-form-item>
				<u-form-item label="交易密码" label-width="200" prop="payPassword" class="from-item" :border-bottom="false">
					<u-input v-model="form.payPassword" type="password" placeholder="请输入交易密码" />
				</u-form-item>
			</u-form>
		</view>
		<u-button :custom-style="btnStyle" @click="submit">立即修改</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex:0,
				form:{
					wechatNum:'',
					payPassword:''
				},
				rule:{
					wechatNum:[
						{
							required: true,
							message: '请输入微信账号',
						}
					],
					payPassword:[
						{
							required: true,
							message: '请输入交易密码',
						}
					]
				},
				btnStyle:{
					position: 'fixed',
					bottom: '50rpx',
					width: '702rpx',
					background: '#0C1E3C',
					'border-radius': '6rpx',
					color: '#F8F8F8',
					border: 'none',
					'font-family': 'PingFangSC-Semibold',
					'font-size': '28rpx'
				},
				tabsList:['日榜','周榜','月榜']
			};
		},
		onReady() {
			this.$refs.formRef.setRules(this.rule);
		},
		methods:{
			submit(){
				this.$refs.formRef.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: $u-bg-color;
}
.payment-wechat-container{
	padding: 0 24rpx;
	.tab-box{
		border: 4rpx solid #111C3A;
		border-radius: 10rpx;
		margin-bottom: 30rpx;
	}
	.tab-item{
		flex: 1;
		color: #111C3A;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		&.active{
			color: #F8F8F8;
			background-color: #111C3A;
		}
	}
	.card{
		background: #FFFFFF;
		box-shadow: 0 4rpx 8rpx 0 rgba(224,215,215,0.15);
		border-radius: 6rpx;
		padding: 0 30rpx;
		
		.box{
			width: 168rpx;
			height: 168rpx;
			border: 2rpx dashed #979797;
		}
	}
}
</style>
