<template>
	<view class="session-container">
		<u-navbar :title="pageTitle" title-bold title-size="32" title-color="#282828" :border-bottom="false"></u-navbar>
		<view class="serial-number"><u-search placeholder="请输入库号" v-model="keyword" bg-color="#F9FCFE" :show-action="false" height="76"></u-search></view>
		<view class="countdown" v-if="!isStart">
			本场距离开抢还有
			<u-count-down :timestamp="timestamp" color="#E21A1A" separator-color="#E21A1A" bg-color="transparent" font-size="28"></u-count-down>
		</view>
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{ leftList }">
				<view class="demo-warter" v-for="(item, index) in leftList" :key="index" @click="goDetail(item)">
					<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title u-line-1">{{ item.title }}</view>
					<view class="demo-price">¥{{ item.price }}元</view>
				</view>
			</template>
			<template v-slot:right="{ rightList }">
				<view class="demo-warter" v-for="(item, index) in rightList" :key="index" @click="goDetail(item)">
					<u-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></u-lazy-load>
					<view class="demo-title u-line-1">{{ item.title }}</view>
					<view class="demo-price">¥{{ item.price }}元</view>
				</view>
			</template>
		</u-waterfall>
		<view class="sorter u-flex"><diy-sorter :total="pagination"></diy-sorter></view>
	</view>
</template>

<script>
import diySorter from '@/components/diy-sorter/diy-sorter.vue';
export default {
	components: { diySorter },
	data() {
		return {
			keyword: '',
			flowList: [],
			pagination: 15,
			timestamp: 86400,
			isStart: true,
			list: [
				{
					price: 35,
					title: '北国风光，千里冰封，万里雪飘',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg'
				},
				{
					price: 75,
					title: '望长城内外，惟余莽莽',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg'
				},
				{
					price: 385,
					title: '大河上下，顿失滔滔',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
				},
				{
					price: 784,
					title: '欲与天公试比高',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg'
				},
				{
					price: 7891,
					title: '须晴日，看红装素裹，分外妖娆',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg'
				},
				{
					price: 2341,
					shop: '李白杜甫白居易旗舰店',
					title: '江山如此多娇，引无数英雄竞折腰',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg'
				},
				{
					price: 661,
					shop: '李白杜甫白居易旗舰店',
					title: '惜秦皇汉武，略输文采',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg'
				},
				{
					price: 1654,
					title: '唐宗宋祖，稍逊风骚',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
				},
				{
					price: 1678,
					title: '一代天骄，成吉思汗',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
				},
				{
					price: 924,
					title: '只识弯弓射大雕',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
				},
				{
					price: 8243,
					title: '俱往矣，数风流人物，还看今朝',
					shop: '李白杜甫白居易旗舰店',
					image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
				}
			]
		};
	},
	onLoad({ pageTitle }) {
		this.pageTitle = pageTitle;
		this.addRandomData();
	},
	methods: {
		addRandomData() {
			for (let i = 0; i < 10; i++) {
				let index = this.$u.random(0, this.list.length - 1);
				// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
				let item = JSON.parse(JSON.stringify(this.list[index]));
				item.id = this.$u.guid();
				this.flowList.push(item);
			}
		},
		goDetail({ id }) {
			this.$u.route('/other-pages/session/detail', { id });
		}
	}
};
</script>

<style lang="scss" scoped>
.session-container {
	width: 100vw;
	min-height: calc(100vh - var(--status-bar-height) - var(--window-top));
	background: #fafafa;
	overflow: hidden;
	padding-bottom: 120rpx;
	.serial-number {
		height: 96rpx;
		background: #ffffff;
		padding: 0 24rpx;
	}
	.countdown {
		width: 100%;
		height: 88rpx;
		background: rgba(0, 0, 0, 0.04);
		font-size: 28rpx;
		font-weight: 400;
		color: #e21a1a;
		line-height: 88rpx;
		text-align: center;
	}
	.u-waterfall {
		padding: 0 24rpx;
	}
	.demo-warter {
		border-radius: 8px;
		margin: 20rpx 9rpx 0;
		background-color: #ffffff;
		position: relative;
		box-shadow: 0px 4rpx 8rpx 0px rgba(224, 215, 215, 0.15);
		border-radius: 10rpx;

		.demo-image {
			width: 100%;
			border-radius: 4px;
		}

		.demo-title {
			width: 300rpx;
			font-size: 30rpx;
			margin-top: 5px;
			color: $u-main-color;
			padding: 0 16rpx;
		}

		.demo-price {
			font-size: 30rpx;
			color: $u-type-error;
			margin-top: 5px;
			padding: 0 16rpx 16rpx;
		}
	}

	.sorter {
		width: 100vw;
		height: 100rpx;
		background: #ffffff;
		position: fixed;
		bottom: 0;
	}
}
</style>
