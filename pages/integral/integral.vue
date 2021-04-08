<template>
	<view class="integral-container">
		<u-empty :show="isEmpty" :src="$util.getStaticImg('Robotics-cuate@2x.png')" iconSize="324" text="活动暂未开启" color="#8c8c8c">
			<template #bottom> 
				<text class="u-font-26 u-type-info">
					敬请期待
				</text>
			</template>
	</u-empty>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isEmpty: true
		};
	}
};
</script>

<style lang="scss" scoped>
.integral-container{
	width: 100vw;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top) - var(--window-bottom));
	background-color: $u-bg-color;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
