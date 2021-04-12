<template>
	<view class="notice-container">
		<u-navbar :is-back="false" title="公告" title-bold title-size="32" title-color="#282828" :border-bottom="false"></u-navbar>
		<view class="card-item" v-for="(item, index) in dataList" :key="index" @click="goNoticeDetail(item)">
			<u-image width="184rpx" height="142rpx" :src="item.thumb" border-radius="10"></u-image>
			<view class="item-info">
				<text class="u-font-30">{{ item.title }}</text>
				<view class="u-type-info-dark u-font-24 u-flex">
					<text class="u-line-1 u-flex-1">{{ item.platform }}</text>
					<text class="u-row-right">{{ item.createtime }}</text>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" margin-bottom="20"/>
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<u-tabbar v-model="current" :list="tablist" :mid-button="false"></u-tabbar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dataList: [],
			current: 0,
			pageIndex: 1, // 第X页
			total:0,
			pagesize:0,
			status: 'loadmore',
			iconType: 'flower',
			loadText: {
				loadmore: '轻轻上拉',
				loading: '努力加载中',
				nomore: '实在没有了'
			},
			scrollTop:0
		};
	},
	onLoad() {
		this.tablist = this.$config.tabbarList;
		this.getNoticeList();
	},
	onPullDownRefresh() {
		this.pageIndex =1;
		this.total = 0;
		this.getNoticeList();
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	methods: {
		getNoticeList() {
			this.$u
				.post('app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=api.index.get_notice_list', {
					page: this.pageIndex
				})
				.then(res => {
					if(this.pageIndex == 1) this.dataList = [];
					this.dataList = this.dataList.concat(res.list);
					this.total = res.total;
					this.pagesize = res.pagesize;
					if(this.total > this.pageIndex * this.pagesize){
						this.status = 'loadmore'
					}else{
						this.status = 'nomore'
					}
					uni.stopPullDownRefresh();
					console.log(res);
				});
		},
		goNoticeDetail({id}){
			this.$u.route('/other-pages/notice/notice-detail',{id});
		}
	},
	onReachBottom() {
		if(this.total > this.pageIndex * this.pagesize){
			this.status = 'loading'
			this.pageIndex ++;
			this.getNoticeList();
		}
	}
};
</script>

<style lang="scss" scoped>
.notice-container {
	width: 100vw;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
	background: $u-bg-color;
	overflow: hidden;
}
.card-item {
	display: flex;
	align-items: center;
	width: 662rpx;
	height: 182rpx;
	padding: 20rpx;
	background: #ffffff;
	box-shadow: 0px 4rpx 8rpx 0rpx rgba(224, 215, 215, 0.15);
	border-radius: 6rpx;
	margin: 20rpx auto;
	.item-info {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 20rpx;
		height: -webkit-fill-available;
		overflow: hidden;
	}
}
</style>
