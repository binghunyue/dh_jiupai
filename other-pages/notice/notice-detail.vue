<template>
	<view class="notice-detail-container">
		<u-navbar :title="info.title" title-bold title-size="32" title-color="#282828" :border-bottom="false"></u-navbar>
		<text class="u-type-info">发布时间：{{$u.timeFormat(info.createtime, 'yyyy-mm-dd hh:ss')}}</text>
		<view class="card">
			<rich-text :nodes="info.detail"></rich-text>
		</view>
	</view>
</template>

<script>
export default{
	data() {
		return {
			info:{}
		}
	},
	onLoad({id}) {
		this.getNoticeDetailInfo(id);
	},
	methods:{
		getNoticeDetailInfo(id){
			this.$u.post('app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=api.index.notice_detail',{id}).then(res=>{
				this.info = res.notice_detail;
				console.log('公告详情：：：',res);
			})
		}
	}
}
</script>

<style lang="scss">
	.notice-detail-container{
		padding: 24rpx;
		background-color: $u-bg-color;
		min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
		.card{
			margin-top: 30rpx;
			padding: 20rpx;
			background: #ffffff;
			box-shadow: 0px 4rpx 8rpx 0rpx rgba(224, 215, 215, 0.15);
			border-radius: 6rpx;
		}
	}
</style>
