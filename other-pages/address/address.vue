<template>
	<view class="address-container">
		<view class="address-item" v-for="(item, index) in addressList" :key="index">
			<view class="address-default" v-if="item.is_default == 1">
				<u-image :src="$util.getStaticImg('icon_log_selected2x.png')" width="30" height="30" @click="setDefault(item.id)"></u-image>
			</view>
			<view class="address-item-top" @click="setDefault(item.id)">
				<view class="address-info">
					<text class="label" v-if="item.is_default == 1">默认</text>
					{{ item.address }}
				</view>
				<view class="address-top-info">
					<view class="address-name">{{ item.name }}</view>
					<view class="address-tel">{{ item.phone }}</view>
				</view>
			</view>
			<view class="address-btn"><image :src="$util.getStaticImg('icon_add_receipt_edit@2x.png')" mode="aspectFit" @click="addAddress('edit', item.id)"></image></view>
		</view>
		<!-- 新建收货地址 -->
		<view class="btn-box">
			<u-button :custom-style="btnStyle" :hair-line="false" @click="goCreateAddress('create')">
				<u-icon name="plus" color="#F8F8F8"></u-icon>
				<text class="u-p-l-22">新建收货地址</text>
			</u-button>
		</view>
		<u-empty mode="address" text="您当前还没有任何地址哦,快去添加吧" :show="addressList.length == 0 ? true : false"></u-empty>
	</view>
</template>

<script>
export default {
	data() {
		return {
			addressList: [
				{
					id: 0,
					address: '安徽省合肥市蜀山区潜山路与习友路',
					name: '李女士',
					is_default: 1,
					phone: '17756987822'
				},
				{
					id: 1,
					address: '安徽省合肥市蜀山区潜山路与习友路0',
					name: '李女士',
					is_default: 0,
					phone: '17756987822'
				},
				{
					id: 2,
					address: '安徽省合肥市蜀山区潜山路与习友路1',
					name: '李女士',
					is_default: 0,
					phone: '17756987822'
				}
			],
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
	methods: {
		goCreateAddress(type){
			this.$u.route('/other-pages/address/edit-address',{type})
		}
	}
};
</script>

<style lang="scss">
.address-container {
	.address-item {
		display: flex;
		background-color: #ffffff;
		padding: 30rpx 24rpx;
		align-items: center;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			display: block;
			width: 702rpx;
			height: 2rpx;
			background-color: #eaeaea;
			left: 50%;
			transform: translateX(-50%);
			bottom: 0;
		}

		&.active {
			border-top: 1px solid #eaeaea;
			/*  */
		}

		.address-default {
			display: flex;
			align-items: center;
			font-size: 22rpx;
			color: #8c8c8c;
			margin-right: 26rpx;

			image {
				width: 52rpx;
				height: 52rpx;
			}

			.default {
				padding-left: 10rpx;
			}
		}

		.address-item-top {
			display: flex;
			flex-direction: column;
			flex: 1;
			margin-right: 60rpx;

			.address-top-info {
				display: flex;
				margin-top: 20rpx;

				.address-name {
					font-size: 28rpx;
					color: #8c8c8c;
				}

				.address-tel {
					font-size: 28rpx;
					color: #8c8c8c;
					margin-left: 30rpx;
				}
			}

			.address-info {
				font-size: 28rpx;
				color: #282828;
				line-height: 20px;
				.label {
					padding: 0 12rpx;
					display: inline-block;
					height: 32rpx;
					line-height: 32rpx;
					font-size: 22rpx;
					color: #282828;
					border: 2rpx solid #8c8c8c;
					border-radius: 4rpx;
					margin-right: 16rpx;
				}
			}
		}

		.address-btn {
			image {
				width: 30rpx;
				height: 30rpx;
			}
		}
	}
	.btn-box {
		position: fixed;
		bottom: 14rpx;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
