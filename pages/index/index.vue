<template>
	<view class="container">
		<u-swiper :list="list" mode="none" :effect3d="true" bg-color="transparent" @click="clickSwiper"></u-swiper>
		<u-gap height="40"></u-gap>
		<!-- 公告 -->
		<view class="announcement u-flex">
			<u-image width="84rpx" height="36rpx" src="@/static/images/Robotics_gg@2x.png"></u-image>
			<view class="u-flex-1 u-line-1"><u-notice-bar mode="vertical" :volume-icon="false" :list="noticeList" type="none" color="#282828" duration="3500"></u-notice-bar></view>
			<u-button size="mini" hover-class="none" :custom-style="moreBtnStyle">更多</u-button>
		</view>
		<!-- 场次 -->
		<view class="session">
			<view v-for="(item, index) in dataList" :key="index" class="session-item">
				<u-gap height="50"></u-gap>
				<text class="time">{{ item.time }}</text>
				<u-gap height="30"></u-gap>
				<view class="image-box">
					<view class="state">{{ item.state }}</view>
					<view class="period-time">{{ item.startTime }}-{{ item.endTime }}</view>
					<u-image width="100%" height="100%" :src="item.image"></u-image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			href: 'https://uniapp.dcloud.io/component/README?id=uniui',
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
			noticeList: ['寒雨连江夜入', '平明送客楚山孤', '洛阳亲友如相问', '一片冰心在玉壶'],
			moreBtnStyle: {
				width: '88rpx',
				height: '40rpx',
				'font-size': '24rpx'
			},
			dataList: [
				{
					time: '上午场',
					image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					state: '已开拍',
					startTime: '9:30',
					endTime: '10:30'
				},
				{
					time: '下午场',
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					state: '未开始',
					startTime: '15:30',
					endTime: '16:30'
				},
				{
					time: '晚上场',
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					state: '未开始',
					startTime: '22:30',
					endTime: '23:30'
				}
			]
		};
	},
	methods: {
		goLogin() {
			uni.navigateTo({
				url: '/login-pages/login/login'
			});
		},
		clickSwiper(e) {
			console.log(e);
		}
	}
};
</script>

<style lang="scss" scoped>
.announcement {
	margin: 0 30rpx;
	padding: 2rpx 0;
	border: {
		top: 2rpx solid #eaeaea;
		bottom: 2rpx solid #eaeaea;
	}
}
.session {
	.session-item {
		text-align: center;
		> .time {
			font-family: PingFangSC-Semibold;
			font-size: 36rpx;
			color: #282828;
			letter-spacing: 0;
		}
		.image-box {
			position: relative;
			width: 690rpx;
			height: 256rpx;
			border-radius: 10rpx;
			overflow: hidden;
			margin: auto;
			.state {
				position: absolute;
				right: 0;
				top: 0;
				width: 118rpx;
				height: 56rpx;
				line-height: 56rpx;
				background: #ee8c4e;
				border-radius: 0 0 0 16rpx;
				font-size: 26rpx;
				color: #f8f8f8;
				letter-spacing: 0;
				z-index: 999;
			}
			.period-time {
				position: absolute;
				width: 100%;
				height: 100%;
				line-height: 256rpx;
				background-color: rgba(0, 0, 0, 0.2);
				top: 0;
				left: 0;
				font-family: PingFangSC-Semibold;
				font-size: 32rpx;
				color: #F8F8F8;
				letter-spacing: 0;
				z-index: 998;
			}
		}
	}
}
</style>
