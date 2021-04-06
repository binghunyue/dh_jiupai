<template>
	<view class="earnings-container">
		<u-gap height="20" bg-color="#fafafa"></u-gap>
		<view v-for="(item, index) in dataList" :key="index" class="u-flex u-border-bottom u-p-t-30 u-p-b-30">
			<view>
				<view class="font-semibold u-m-b-12">{{ item.title }}</view>
				<view class="u-font-24 u-type-info">{{ item.detail }}</view>
			</view>
			<view class="u-flex-1 u-text-right u-font-36 font-semibold">{{ item.price }}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dataList: [
				{
					title: '转拍商品XXXX扣除：2000',
					detail: '2021-07-21 09:58',
					price: '-2000'
				},
				{
					title: '转拍商品XXXX扣除：2000',
					detail: '2021-07-21 09:58',
					price: '2000'
				},
				{
					title: '转拍商品XXXX扣除：2000',
					detail: '2021-07-21 09:50',
					price: '-2000'
				}
			]
		};
	}
};
</script>

<style lang="scss">
.earnings-container {
	padding: 0 24rpx;
}
</style>
