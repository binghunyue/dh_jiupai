<template>
	<view class="container">
		<u-swiper :list="list" mode="none" name="thumb" :effect3d="true" bg-color="transparent" @click="clickSwiper"></u-swiper>
		<u-gap height="40"></u-gap>
		<!-- 公告 -->
		<view class="announcement u-flex">
			<u-image width="84rpx" height="36rpx" src="@/static/images/Robotics_gg@2x.png"></u-image>
			<view class="u-flex-1 u-line-1"><u-notice-bar mode="vertical" :volume-icon="false" :list="noticeList" type="none" color="#282828" duration="3500"></u-notice-bar></view>
			<u-button size="mini" hover-class="none" :custom-style="moreBtnStyle" @click="goNotice">更多</u-button>
		</view>
		<!-- 场次 -->
		<view class="session">
			<view v-for="(item, index) in dataList" :key="index" class="session-item">
				<u-gap height="50"></u-gap>
				<text class="time">{{ item.title }}</text>
				<u-gap height="30"></u-gap>
				<view class="image-box" @click="goSession(item)">
					<view class="state">{{ item.is_start ? '已开拍' : '未开始' }}</view>
					<view class="period-time">{{ item.start_time }}-{{ item.end_time }}</view>
					<u-image width="100%" height="100%" :src="item.advimg"></u-image>
				</view>
			</view>
		</view>
		<u-no-network></u-no-network>
	</view>
</template>

<script>
export default {
	data() {
		return {
			href: 'https://uniapp.dcloud.io/component/README?id=uniui',
			list: [],
			noticeList: [],
			moreBtnStyle: {
				width: '88rpx',
				height: '40rpx',
				'font-size': '24rpx'
			},
			dataList: []
		};
	},
	onLoad() {
		this.getInfo();
	},
	methods: {
		// 获取首页信息
		onPullDownRefresh(){
			this.list = [];
			this.noticeList = [];
			this.dataList = [];
			this.getInfo();
		},
		getInfo() {
			this.$u.post('app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=api.index.get_shopindex').then(res => {
				// 顶部轮播图
				this.list = this.list.concat(res.adv);
				// 公告
				res.notices.forEach(item => {
					this.noticeList.push(item.title);
				});
				// 场次
				this.dataList = this.dataList.concat(res.times);
				uni.stopPullDownRefresh();
			});
		},
		goLogin() {
			uni.navigateTo({
				url: '/login-pages/login/login'
			});
		},
		clickSwiper(e) {
			console.log(e);
		},
		goNotice() {
			this.$u.route('/other-pages/notice/notice');
		},
		goSession({ time }) {
			this.$u.route('/other-pages/session/list', {
				pageTitle: time
			});
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
				z-index: 998;
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
				color: #f8f8f8;
				letter-spacing: 0;
				z-index: 997;
			}
		}
	}
}
</style>
