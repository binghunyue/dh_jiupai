<template>
	<view class="perfect-info">
		<swiper :current="activeIndex" :indicator-dots="false" :autoplay="false" :interval="3000" :duration="1000" :disable-touch="true" class="swiper-box">
			<swiper-item>
				<u-gap height="58"></u-gap>
				<view class="swiper-item">
					<diy-step :stepsList="stepsList" :activeIndex="activeIndex"></diy-step>
					<view class="from-box">
						<text class="u-font-32">第一步：完成实名认证</text>
						<u-form :model="fristData" ref="firstStep" :error-type="['toast']">
							<u-form-item label="真实姓名" label-width="150" prop="name" class="from-item" :border-bottom="false">
								<u-input v-model="fristData.name" placeholder="请输入真实姓名" />
							</u-form-item>
							<u-form-item label="身份证" label-width="150" prop="cardId" class="from-item" :border-bottom="false">
								<u-input v-model="fristData.cardId" placeholder="请输入身份证号" />
							</u-form-item>
						</u-form>
						<view class="u-flex u-row-between">
							<u-upload :custom-btn="true" ref="uUpload" :show-upload-list="showUploadList" :action="action">
								<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
									<u-image :src="$util.getStaticImg('image_focused_sctxmzp@2x.png')" width="100%" height="100%"></u-image>
								</view>
							</u-upload>
							<u-upload :custom-btn="true" ref="uUpload" :show-upload-list="showUploadList" :action="action">
								<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
									<u-image :src="$util.getStaticImg('image_focused_scghmzp@2x.png')" width="100%" height="100%"></u-image>
								</view>
							</u-upload>
						</view>
						<u-button @click="submit" :custom-style="submitBtnStyle" :hair-line="false">验证身份，并继续</u-button>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<u-gap height="58"></u-gap>
				<view class="swiper-item">
					<diy-step :stepsList="stepsList" :activeIndex="activeIndex"></diy-step>
					<view class="from-box">
						<text class="u-font-32">第二步：绑定交易密码</text>
						<u-form :model="secondData" ref="secondStep" :error-type="['toast']">
							<u-form-item label="验证码" label-width="200" prop="code" class="from-item" :border-bottom="false">
								<u-input v-model="secondData.code" placeholder="请输入验证码" />
								<template #right>
									<text class="sendCode" @click="getCode">{{ tip }}</text>
									<u-verification-code :seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
								</template>
							</u-form-item>
							<u-form-item label="交易密码" label-width="200" prop="payPassword" class="from-item" :border-bottom="false">
								<u-input v-model="secondData.payPassword" type="password" placeholder="请输入交易密码" />
							</u-form-item>
							<u-form-item label="确认交易密码" label-width="200" prop="againPayPassword" class="from-item" :border-bottom="false">
								<u-input v-model="secondData.againPayPassword" type="password" placeholder="请再次输入交易密码" />
							</u-form-item>
						</u-form>
						<u-button @click="secondSubmit" :custom-style="submitBtnStyle" :hair-line="false">确认提交，下一步</u-button>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<u-gap height="58"></u-gap>
				<view class="swiper-item">
					<diy-step :stepsList="stepsList" :activeIndex="activeIndex"></diy-step>
					<view class="from-box">
						<text class="u-font-32">第三步：绑定银行卡</text>
						<u-form :model="thirdData" ref="thirdStep" :error-type="['toast']">
							<u-form-item label="温馨提示" label-width="200" prop="tip" class="from-item" :border-bottom="false">
								<u-input v-model="thirdData.tip" placeholder="必须绑定实名认证本人的银行卡" />
							</u-form-item>
							<u-form-item label="开户银行" label-width="200" prop="bankName" class="from-item" :border-bottom="false">
								<u-input v-model="thirdData.bankName" placeholder="请输入开户银行名称" />
							</u-form-item>
							<u-form-item label="银行卡号" label-width="200" prop="bankNum" class="from-item" :border-bottom="false">
								<u-input v-model="thirdData.bankNum" placeholder="请输入银行卡号" />
							</u-form-item>
							<u-form-item label="收款人姓名" label-width="200" prop="payeeName" class="from-item" :border-bottom="false">
								<u-input v-model="thirdData.payeeName" placeholder="请输入收款人姓名" />
							</u-form-item>
						</u-form>
						<u-button @click="thirdSubmit" :custom-style="submitBtnStyle" :hair-line="false">确认提交，下一步</u-button>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<u-gap height="58"></u-gap>
				<view class="swiper-item">
					<diy-step :stepsList="stepsList" :activeIndex="activeIndex"></diy-step>
					<view class="from-box">
						<text class="u-font-32">第四步：绑定支付宝</text>
						<view class="from-item">
							温馨提示：必须上传支付宝收款码或添加支付宝好友二维码
						</view>
						<view class="u-font-32 u-m-t-60">
							支付宝收款码/加好友二维码
						</view>
						<view class="from-item">
							<u-upload :custom-btn="true" ref="uUpload" :show-upload-list="showUploadList" :action="action">
								<view slot="addBtn" class="robotics_add" hover-class="slot-btn__hover" hover-stay-time="150">
									<u-image :src="$util.getStaticImg('Robotics_add@2x.png')" width="34" height="34"></u-image>
								</view>
							</u-upload>
						</view>
						<u-form :model="fourthData" ref="fourthStep" :error-type="['toast']">
							<u-form-item label="支付宝账号" label-width="200" prop="alipayNum" class="from-item" :border-bottom="false">
								<u-input v-model="fourthData.alipayNum" placeholder="请输入支付宝账号" />
							</u-form-item>
							<u-form-item label="支付宝姓名" label-width="200" prop="alipayName" class="from-item" :border-bottom="false">
								<u-input v-model="fourthData.alipayName" placeholder="请输入支付宝真实姓名" />
							</u-form-item>
						</u-form>
						<u-button @click="fourthSubmit" :custom-style="submitBtnStyle" :hair-line="false">确认提交，下一步</u-button>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<u-gap height="58"></u-gap>
				<view class="swiper-item">
					<diy-step :stepsList="stepsList" :activeIndex="activeIndex"></diy-step>
					<view class="from-box">
						<text class="u-font-32">第五步：绑定微信</text>
						<view class="from-item">
							温馨提示：必须上传微信收款码或添加微信好友二维码
						</view>
						<view class="u-font-32 u-m-t-60">
							微信收款码/加好友二维码
						</view>
						<view class="from-item">
							<u-upload :custom-btn="true" ref="uUpload" :show-upload-list="showUploadList" :action="action">
								<view slot="addBtn" class="robotics_add" hover-class="slot-btn__hover" hover-stay-time="150">
									<u-image :src="$util.getStaticImg('Robotics_add@2x.png')" width="34" height="34"></u-image>
								</view>
							</u-upload>
						</view>
						<u-form :model="fifthData" ref="fifthStep" :error-type="['toast']">
							<u-form-item label="微信账号" label-width="200" prop="wechatNum" class="from-item" :border-bottom="false">
								<u-input v-model="fifthData.wechatNum" placeholder="请输入微信账号" />
							</u-form-item>
							<u-form-item label="微信姓名" label-width="200" prop="wechatName" class="from-item" :border-bottom="false">
								<u-input v-model="fifthData.wechatName" placeholder="请输入微信真实姓名" />
							</u-form-item>
						</u-form>
						<u-button @click="fifthSubmit" :custom-style="submitBtnStyle" :hair-line="false">确认提交，下一步</u-button>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<u-gap height="58"></u-gap>
				<view class="swiper-item">
					<diy-step :stepsList="stepsList" :activeIndex="activeIndex"></diy-step>
					<view class="success">
						<u-image :src="$util.getStaticImg('icon_befault_shcg@2x.png')" width="164" height="164"></u-image>
						<text class="font-semibold u-m-t-50">恭喜！您已经成功完善资料！</text>
					</view>
					<view class="from-box">
						<u-button @click="fifthSubmit" :custom-style="submitBtnStyle" :hair-line="false">我已完成</u-button>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import diyStep from '@/components/diy-step/diy-step.vue';
import rule from '../public/js/form-rule.js';
export default {
	components: { diyStep },
	mixins:[rule],
	data() {
		return {
			action: 'http://www.example.com/upload',
			showUploadList: false,
			activeIndex: 0,
			stepsList: [{ name: '实名认证' }, { name: '绑定交易密码' }, { name: '绑定银行卡' }, { name: '绑定支付宝' }, { name: '绑定微信' }, { name: '完成' }],
			submitBtnStyle: {
				position: 'absolute',
				bottom: '50rpx',
				width: '702rpx',
				background: '#0C1E3C',
				'border-radius': '6rpx',
				color: '#F8F8F8',
				border: 'none',
				'font-family': 'PingFangSC-Semibold',
				'font-size': '28rpx'
			},
			tip: ''
		};
	},
	methods: {
		codeChange(text) {
			this.tip = text;
		},
		getCode() {
			if (this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				uni.showLoading({
					title: '正在获取验证码'
				});
				setTimeout(() => {
					uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					this.$u.toast('验证码已发送');
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 2000);
			} else {
				this.$u.toast('倒计时结束后再发送');
			}
		},
		submit() {
			this.$refs.firstStep.validate(valid => {
				if (valid) {
					console.log('验证通过');
					this.activeIndex++;
				} else {
					console.log('验证失败');
				}
			});
		},
		secondSubmit(){
			this.$refs.secondStep.validate(valid => {
				if (valid) {
					console.log('验证通过');
					this.activeIndex++;
				} else {
					console.log('验证失败');
				}
			});
		},
		thirdSubmit(){
			this.$refs.thirdStep.validate(valid => {
				if (valid) {
					console.log('验证通过');
					this.activeIndex++;
				} else {
					console.log('验证失败');
				}
			});
		},
		fourthSubmit(){
			this.$refs.fourthStep.validate(valid => {
				if (valid) {
					console.log('验证通过');
					this.activeIndex++;
				} else {
					console.log('验证失败');
				}
			});
		}
	}
};
</script>

<style lang="scss">
.swiper-box {
	height: calc(100vh - var(--status-bar-height) - var(--window-top));
}

.from-box {
	margin-top: 150rpx;
	padding: 0 24rpx;
	.from-item {
		background: #f5f9fc;
		border-radius: 6rpx;
		padding: 14rpx 30rpx;
		margin-top: 30rpx;
	}
}
.slot-btn {
	width: 336rpx;
	height: 210rpx;
	border-radius: 10rpx;
	margin-top: 60rpx;
}

.robotics_add{
	width: 642rpx;
	height: 194rpx;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
}

.sendCode {
	font-size: 28rpx;
	color: #1f8bfb;
	letter-spacing: 0;
}

.success{
	margin-top: 288rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.slot-btn__hover {
	background-color: rgb(235, 236, 238);
}
</style>
