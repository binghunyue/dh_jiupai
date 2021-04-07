<template>
	<view class="edit-address-container">
		<u-navbar :title="pageTitle" :title-bold="true" title-color="#282828">
			<template #right>
				<text class="u-p-r-24">删除</text>
			</template>
		</u-navbar>
		<view class="card">
			<u-field v-model="formInfo.mobile" label="收货人" placeholder="请填写收货人姓名"></u-field>
			<u-field v-model="formInfo.code" label="手机号码" placeholder="请输入手机号码"></u-field>
			<u-field v-model="formInfo.address" label="所在地区" placeholder="省市区县、乡镇等" :disabled="true" @click="showAction"></u-field>
			<u-picker mode="region" v-model="show" @confirm="selectAddress"></u-picker>
			<u-field v-model="formInfo.code" label="详细地址" placeholder="详细地址" type="textarea"></u-field>
		</view>
		<view class="card u-flex u-row-between u-p-l-24 u-p-r-24 u-m-t-20">
			<text>设为默认地址</text>
			<u-image :src="$util.getStaticImg('set_button_close@2x.png')" width="78" height="56" v-show="!isDefault" @click="isDefault = !isDefault"></u-image>
			<u-image :src="$util.getStaticImg('set_button_ok@2x.png')" width="78" height="56" v-show="isDefault" @click="isDefault = !isDefault"></u-image>
		</view>
		<view class="btn-box"><u-button :custom-style="btnStyle" :hair-line="false">保存设置</u-button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pageTitle: '新建收货地址',
			formInfo: {
				mobile: '',
				code: ''
			},
			show: false,
			isDefault: false,
			btnStyle: {
				width: '702rpx',
				background: '#0C1E3C',
				'border-radius': '6rpx',
				color: '#F8F8F8',
				border: 'none',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '28rpx'
			}
		};
	},
	onLoad({ type }) {
		switch (type) {
			case 'create':
				this.pageTitle = '新建收货地址';
				break;
			default:
				this.pageTitle = '编辑收货地址';
		}
	},
	methods: {
		showAction() {
			this.show = true;
		},
		selectAddress(e) {
			this.formInfo.address = e.province.label + e.city.label + e.area.label;
			// console.log('eeee:::',e);
		}
	}
};
</script>

<style lang="scss">
.edit-address-container {
	background-color: $u-bg-color;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
	.card {
		background: #ffffff;
		box-shadow: 0 4rpx 8rpx 0 rgba(224, 215, 215, 0.15);
		border-radius: 0 0 6rpx 6rpx;
		min-height: 100rpx;
	}
	.btn-box {
		position: fixed;
		bottom: 14rpx;
		left: 50%;
		transform: translateX(-50%);
	}
}

/deep/ .u-field {
	padding: 30rpx 28rpx;
}
</style>
