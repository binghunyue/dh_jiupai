import Config from './config.js';

export default{
	getStaticImg(name){
		return Config.static_img_path + name;
	},
	/**
	 * 复制
	 * @param {Object} message
	 * @param {Object} callback
	 */
	copy(value, callback) {
		if (!value) {
			uni.showToast({
				title:'复制失败'
			});
			return;
		}
		// #ifdef H5
		var oInput = document.createElement('input'); //创建一个隐藏input（重要！）
		oInput.value = value; //赋值
		document.body.appendChild(oInput);
		oInput.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
		oInput.className = 'oInput';
		oInput.style.display = 'none';
		uni.showToast({
			title:'复制成功'
		});
		typeof callback == 'function' && callback();
		// #endif
	
		// #ifdef MP || APP-PLUS
		uni.setClipboardData({
			data: value,
			success: () => {
				typeof callback == 'function' && callback();
			}
		});
		// #endif
	},
}