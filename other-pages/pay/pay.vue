<template>
	<view class="pay-container">
		<view class="cell">
			<diy-cell title="预留手机号：" value="18888888888"></diy-cell>
			<diy-cell title="商品全称：" value="苟成文《上市送达》赏打JB100817 苟成文《上市送达》赏打苟成文《上市送达》赏打JB100817 苟成文《上市送达》赏打"></diy-cell>
			<diy-cell title="库号：" value="JB100817"></diy-cell>
			<diy-cell title="订单金额：" value="JB100817"></diy-cell>
			<diy-cell title="数量：" value="1"></diy-cell>
			<diy-cell title="单价：" value="2000"></diy-cell>
			<diy-cell title="下单时间：" value="2021-03-01 09:24:22"></diy-cell>
			<diy-cell title="预留手机号：" value="18888888888"></diy-cell>
			<diy-cell title="付款方式：">
				<view class="value">
					<u-button size="mini" :custom-style="selectPay == index ? activePayBtnStyle : paymentBtnStyle" v-for="(item, index) in payList" :key="index" @click="selectpayment(index)">
						{{ item }}
					</u-button>
				</view>
			</diy-cell>
			<diy-cell title="开户行：" value="邮政储蓄"></diy-cell>
			<diy-cell title="姓名：" value="啦啦啦"></diy-cell>
			<diy-cell title="账号：" value="3232341212412123124131"></diy-cell>
			<diy-cell title="上传凭证：" :isShowBottom="false"><u-upload :action="action" upload-text="选择凭证"></u-upload></diy-cell>
		</view>
		<view class="footer u-flex">
			<u-button :custom-style="phoneBtnStyle" :hair-line="false">电话联系12222222222</u-button>
			<u-button :custom-style="payBtnStyle" :hair-line="false">立即付款</u-button>
		</view>
	</view>
</template>

<script>
import diyCell from '@/components/diy-cell/diy-cell.vue';
export default {
	components: {
		diyCell
	},
	data() {
		return {
			action: 'http://www.example.com', // 演示地址
			payList: ['银联', '微信', '支付宝'],
			selectPay: 0,
			paymentBtnStyle: {
				width: '116rpx',
				height: '58rpx',
				'margin-right': '20rpx'
			},
			activePayBtnStyle: {
				width: '116rpx',
				height: '58rpx',
				'margin-right': '20rpx',
				'background-color': '#111C3A',
				color: '#F8F8F8'
			},
			phoneBtnStyle: {
				width: '338rpx',
				height: '90rpx',
				'background-color': '#F5F9FC',
				color: '#0DB5E7',
				border: 'none'
			},
			payBtnStyle: {
				width: '338rpx',
				height: '90rpx',
				'background-color': '#008100',
				color: '#F8F8F8',
				border: 'none'
			}
		};
	},
	methods:{
		selectpayment(index){
			this.selectPay = index;
		}
	}
};
</script>

<style lang="scss">
.pay-container {
	width: 100vw;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
	background: #fafafa;
	margin-bottom: 120rpx;
	overflow: hidden;
}
.cell {
	margin: auto;
	margin-top: 20rpx;
	background: #ffffff;
	box-shadow: 0px 4rpx 8rpx 0px rgba(224, 215, 215, 0.15);
	border-radius: 6rpx;
	padding: 0 16rpx;
}
.footer {
	width: 100vw;
	height: 110rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #ffffff;
}
</style>
