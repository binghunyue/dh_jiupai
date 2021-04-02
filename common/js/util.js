import Config from './config.js';

export default{
	getStaticImg(name){
		return Config.static_img_path + name;
	}
}