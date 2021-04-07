<script>
export default {
	onLaunch: function() {
		// console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
		// console.log('App Launch')
	},
	onShow: function() {
		// console.log('App Show')
	},
	onHide: function() {
		// console.log('App Hide')
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uview-ui/index.scss';
@font-face {
	font-family: 'PingFang-Bold';
	src: url('~@/static/fonts/PingFang-Bold.ttf');
}
@font-face {
	font-family: 'PingFangSC-Semibold';
	src: url('~@/static/fonts/PingFang-SC-Semibold.ttf');
}
@font-face {
	font-family: 'PingFangSC-Regular';
	src: url('~@/static/fonts/PingFang-Jian-ChangGuiTi.ttf');
}
.font-semibold {
	font-family: 'PingFangSC-Semibold';
}
.font-regular {
	font-family: 'PingFangSC-Regular';
}
body {
	font-family: 'PingFangSC-Regular';
}
</style>
