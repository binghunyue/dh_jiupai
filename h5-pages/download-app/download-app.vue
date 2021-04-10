<template>
	<view class="download-container">
		<u-image :src="$util.getStaticImg('Hello_cuate@2x.png')" width="444" height="442"></u-image>
		<u-gap height="90"></u-gap>
		<u-link href="http://down.ahdhjppm.com/q2yj">
			<view class="btn">
				<u-image :src="$util.getStaticImg('Robotics_ios@2x.png')" width="46" height="54"></u-image>
				<text class="u-p-l-28">立即下载IOS版</text>
			</view>
		</u-link>
		<u-link href="http://down.ahdhjppm.com/q2yj">
			<view class="btn">
				<u-image :src="$util.getStaticImg('Robotics_ad@2x.png')" width="42" height="46"></u-image>
				<text class="u-p-l-28">立即下载安卓版</text>
			</view>
		</u-link>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.download-container {
	background-color: black;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	.btn {
	  width: 500rpx;
	  height: 92rpx;
	  border: 2rpx solid #ffffff;
	  border-radius: 48rpx;
	  display: flex;
	  align-items: center;
	  font-size: 32rpx;
	  color: #f8f8f8;
	  letter-spacing: 0;
	  margin-top: 40rpx;
	  justify-content: center;
	  text-decoration: none;
	}
}
</style>
