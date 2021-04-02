<template>
	<view class="session-container">
		<u-swiper :list="list" mode="none" bg-color="transparent" @click="clickSwiper" height="748" interval="5000"></u-swiper>
		<view class="info-box">
			<u-gap height="30"></u-gap>
			<view class="u-line-1 u-font-32">JB100817 苟成文《上市送达》大声道打赏打JB100817 苟成文《上市送达》大声道打赏打…</view>
			<u-gap height="16"></u-gap>
			<view class="font-semibold u-type-error">
				<text class="u-font-28">¥</text>
				<text style="font-size: 44rpx;">2000</text>
			</view>
			<view class="u-flex u-row-between u-font-24 u-type-info u-m-t-18" v-if="isStart">
				<text>库号:JB10086</text>
				<text>种类:玉石</text>
				<text>规格:约5cm</text>
			</view>
			<u-gap height="26"></u-gap>
		</view>
		<u-gap height="10"></u-gap>
		<view class="info-box">
			<text class="font-semibold u-font-32">商品详情</text>
			<u-parse :html="content" :show-with-animation="true"></u-parse>
		</view>
		<u-button :custom-style="submitStyle" v-if="isStart" @click="grabSingle">立即抢单</u-button>
		<u-gap height="16"></u-gap>
		<view class="countdown" v-if="!isStart">
			本场距离开抢还有
			<u-count-down :timestamp="timestamp" color="#F8F8F8" separator-color="#F8F8F8" bg-color="transparent" font-size="28"></u-count-down>
		</view>
		<u-popup v-model="isShowGrabSinglePop" border-radius="10" mode="center">
			<view class="pop-box u-text-center">
				<text class="u-font-32 u-type-info">此操作是本人操作</text>
				<u-gap height="60"></u-gap>
				<view class="u-flex">
					<u-button :hair-line="false" :custom-style="grabSingleAgainBtnStyle" @click="goGrabSingleAgain">再抢一单</u-button>
					<u-button :hair-line="false" :custom-style="paymentBtnStyle">去付款</u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}
			],
			content: `
						<p>清明节是传统的重大春祭节日，扫墓祭祀、缅怀祖先，是中华民族自古以来的优良传统，不仅有利于弘扬孝道亲情、唤醒家族共同记忆，还可促进家族成员乃至民族的凝聚力和认同感。清明节融汇自然节气与人文风俗为一体，是天时地利人和的合一，充分体现了中华民族先祖们追求“天、地、人”的和谐合一，讲究顺应天时地宜、遵循自然规律的思想</p>
						<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
						<img src="https://cdn.uviewui.com/uview/swiper/1.jpg" />
						<img src="https://cdn.uviewui.com/uview/swiper/3.jpg" />
					`,
			isStart: true,
			timestamp: 86400,
			submitStyle: {
				width:'702rpx',
				'background-color': '#111C3A',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '32rpx',
				color: '#F8F8F8',
				height: '78rpx'
			},
			grabSingleAgainBtnStyle:{
				width:'244rpx',
				height: '88rpx',
				color: '#282828',
				'border-radius': '6rpx',
				'background-color': '#F5F9FC',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '32rpx',
				border:'none'
			},
			paymentBtnStyle:{
				width:'244rpx',
				height: '88rpx',
				color: '#F8F8F8',
				'border-radius': '6rpx',
				'background-color': '#111C3A',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '32rpx',
				border:'none'
			},
			isShowGrabSinglePop:false
		};
	},
	onLoad({ id }) {
		this.id = id;
	},
	methods: {
		clickSwiper(e) {
			console.log(e);
		},
		grabSingle(){
			this.isShowGrabSinglePop = true;
		},
		goGrabSingleAgain(){
			this.$u.route({
				type:'navigateBack',
				delta:1
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.session-container {
	width: 100vw;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
	background: #fafafa;
	overflow: hidden;
}
.info-box {
	padding: 0 24rpx;
	background: #ffffff;
	box-shadow: 0px 4rpx 8rpx 0px rgba(224, 215, 215, 0.15);
	border-radius: 0px 0px 6rpx 6rpx;
}
.countdown {
	position: fixed;
	bottom: 0;
	width: 100vw;
	height: 88rpx;
	background: rgba(0, 0, 0, 0.59);
	color: #f8f8f8;
	line-height: 88rpx;
	text-align: center;
}
.pop-box{
	width: 642rpx;
	padding: 80rpx 0 60rpx;
	background: #FFFFFF;
}
</style>
