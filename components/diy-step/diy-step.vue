<template>
	<view class="u-flex" :style="{ transform: 'translateX(' + setMove + ')' }">
		<view class="step-item" v-for="(item, index) in stepsList" :key="index" :class="{ first: index == 0, 'no-border': activeIndex >= index }">
			<u-image :src="$util.getStaticImg('icon_review_initiate_success@2x.png')" width="48" height="48" v-if="activeIndex >= index"></u-image>
			<text v-else>{{ index + 1 }}</text>
			<text class="name" :class="{ active: activeIndex >= index }">{{ item.name }}</text>
			<view class="line" :class="{ 'no-line': index == stepsList.length - 1 }"></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'diy-step',
	props: {
		stepsList: {
			type: Array,
			default: []
		},
		activeIndex: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			move: 0
		};
	},
	computed: {
		setMove() {
			let move = 0;
			if (this.activeIndex > 0 && this.activeIndex < 3) move = 120 * this.activeIndex;
			if (this.activeIndex >= 3) move = 120 * 3;
			return move * -2 + 'rpx';
		}
	}
};
</script>

<style lang="scss">
.step-item {
	position: relative;
	width: 48rpx;
	height: 48rpx;
	line-height: 48rpx;
	border: 2rpx solid #8c8c8c;
	border-radius: 50%;
	text-align: center;
	margin-right: 190rpx;
	flex-shrink: 0;
	&.no-border {
		border: none;
	}
	&.first {
		margin-left: 84rpx;
	}
	.name {
		position: absolute;
		white-space: nowrap;
		bottom: -60rpx;
		left: 50%;
		transform: translateX(-50%);
		font-size: 24rpx;
		color: #8c8c8c;
		&.active {
			color: #0d1e3c;
		}
	}
	.line {
		position: absolute;
		width: 158rpx;
		height: 2rpx;
		background-color: #8c8c8c;
		right: -176rpx;
		top: 50%;
		transform: translateY(-50%);
		&.no-line {
			background-color: transparent;
		}
	}
}
</style>
