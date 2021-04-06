<template>
	<view class="completed-order-container">
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
				<view class="u-flex"><u-image :src="$util.getStaticImg(item)" v-for="(item, index) in payList" :key="index" height="54" mode="heightFix"></u-image></view>
			</diy-cell>
			<diy-cell title="开户行：" value="邮政储蓄"></diy-cell>
			<diy-cell title="姓名：" value="啦啦啦"></diy-cell>
			<diy-cell title="账号：">
				<view class="u-flex u-row-between">
					<text>3232341212412123124131</text>
					<text class="copy" @click="$util.copy('3232341212412123124131')">复制</text>
				</view>
			</diy-cell>
			<diy-cell title="上传凭证：" :isShowBottom="false"><u-upload :action="action" upload-text="选择凭证"></u-upload></diy-cell>
		</view>
		<view class="footer u-flex">
			<u-button type="error" :custom-style="btnSize">去提货</u-button>
			<u-button type="success" :custom-style="btnSize">去转拍</u-button>
		</view>
		<u-popup v-model="prompt" mode="center" border-radius="10" width="642" height="642">
			<view class="u-padding-60 u-text-center">
				<text class="font-semibold u-font-36">提示</text>
				<u-gap height="40"></u-gap>
				<scroll-view scroll-y="true" class="content"><rich-text nodes=""></rich-text></scroll-view>
				<u-gap height="40"></u-gap>
				<view class="u-flex">
					<u-button :custom-style="noAgreeStyle" :hair-line="false" @click="prompt = false">取消</u-button>
					<u-button :custom-style="agreeStyle">确认</u-button>
				</view>
			</view>
		</u-popup>
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
			payList: ['Robotics_yl@2x.png', 'Robotics_wx@2x.png', 'Robotics_zfb@2x.png'],
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
			btnSize: {
				width: '338rpx',
				height: '90rpx'
			},
			prompt: true,
			agreeStyle: {
				'background-color': '#111C3A',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '28rpx',
				color: '#F8F8F8',
				width: '244rpx',
				height: '80rpx'
			},
			noAgreeStyle: {
				'background-color': '#F5F9FC',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '28rpx',
				color: '#282828',
				width: '244rpx',
				height: '80rpx',
				border: 'none'
			}
		};
	},
	methods: {
		selectpayment(index) {
			this.selectPay = index;
		}
	}
};
</script>

<style lang="scss">
.pay-container {
	width: 100vw;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
	background: $u-bg-color;
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
	.copy {
		padding: 2rpx 18rpx;
		border: 2rpx solid #fe3c5e;
		border-radius: 4rpx;
		color: #fe3c5e;
		font-size: 26rpx;
	}
}
.footer {
	width: 100vw;
	height: 110rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #ffffff;
}
.content {
	width: 532rpx;
	height: 280rpx;
}
</style>
