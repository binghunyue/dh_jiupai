<template>
	<view class="u-flex u-flex-1" :class="total > 5 ? 'u-row-around' : 'u-row-center'">
		<block v-if="total > 5">
			<view class="sorter-item" @click="fristPage">首页</view>
			<view class="sorter-item" @click="prevFive">前五页></view>
		</block>
		<block v-for="(item, index) in presentList" :key="index">
			<view class="sorter-item" :class="{ 'u-margin-right-16': total < 5, active: count == item }" v-if="item > 0" @click="changeCount(item)">{{ item }}</view>
		</block>
		<view class="sorter-item" v-if="total > 5" @click="nextFive">后五页></view>
	</view>
</template>

<script>
/* 
 分页器
 @total ************* 分页器的总数
 */
export default {
	name: 'diy-sorter',
	data() {
		return {
			presentList: [],
			count:1
		};
	},
	props: {
		total: {
			type: Number,
			default: 0
		}
	},
	created() {
		this.fristPage();
	},
	methods: {
		// 首页
		fristPage(){
			this.count = 1;
			this.presentList = [];
			if (this.total > 5) {
				for (let i = 1; i <= 5; i++) {
					this.presentList.push(i);
				}
			} else {
				for (let i = 1; i <= this.total; i++) {
					this.presentList.push(i);
				}
			}
		},
		// 后五页
		nextFive() {
			if (!this.presentList[this.presentList.length - 1] || this.presentList[this.presentList.length - 1] == this.total) {
				this.$u.toast('后面没有了');
				return;
			}
			this.presentList = this.presentList.map(value => {
				let newValue = value + 5;
				if (newValue > this.total) {
					return;
				} else {
					return newValue;
				}
			});
		},
		// 前五页
		prevFive() {
			if (this.presentList[0] == 1) {
				this.$u.toast('前面没有了');
				return;
			}
			this.presentList = this.presentList.map(value => {
				let newValue = value - 5;
				if (newValue > this.total) {
					return;
				} else {
					return newValue;
				}
			});
		},
		// 当前页更改
		changeCount(item){
			this.count = item;
			this.$emit('changeCount',{count:this.count});
		}
	}
};
</script>

<style lang="scss">
.sorter-item {
	padding: 0 12rpx;
	background: #fafafa;
	border-radius: 6rpx;
	border: 2rpx solid #eaeaea;
	min-width: 58rpx;
	height: 60rpx;
	line-height: 60rpx;
	text-align: center;
	&.active{
		border-color: #0C1E3C;
		color: #0C1E3C;
	}
}
</style>
