<template>
	<view class="cell-box u-flex" :class="{'u-border-bottom':isShowBottom}" :style="{ 'min-height': height }">
		<text class="title" v-if="title">{{ title }}</text>
		<view class="value" :class="{ 'u-line-1': value }">
			<text v-if="value">{{ value }}</text>
			<slot v-else></slot>
		</view>
	</view>
</template>

<script>
export default {
	name: 'diy-cell',
	data() {
		return {};
	},
	props: {
		title: {
			type: String,
			default: ''
		},
		value: {
			type: String,
			default: ''
		},
		height: {
			type: String,
			default: '98rpx'
		},
		isShowBottom:{
			type:Boolean,
			default:true
		}
	}
};
</script>

<style lang="scss">
.cell-box {
	width: calc(100% - 12rpx);
	padding: 0 6rpx;
}
.title {
	width: 168rpx;
	color: #8c8c8c;
	font-size: 28rpx;
}
.value {
	flex: 1;
	margin-left: 30rpx;
}
</style>
