export default {
	data(){
		return{
			fristData: {
				name: '',
				cardId: null,
				rule:{
					name: [
						{
							required: true,
							message: '请输入姓名',
							trigger: 'blur'
						}
					],
					cardId: [
						{
							required: true,
							validator: (rule, value, callback) => {
								return this.$u.test.idCard(value);
							},
							message: '您输入的身份证号不合法',
							trigger: 'blur'
						}
					]
				}
			},
			secondData:{
				code:'',
				payPassword:'',
				againPayPassword:'',
				rule:{
					code:[
						{
							required: true,
							message: '请输入验证码',
							trigger: 'blur'
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.code(value,4);
							},
							message: '请输入正确的验证码',
							trigger: 'blur'
						}
					],
					payPassword:[
						{
							required: true,
							message: '请输入交易密码',
							trigger: 'blur'
						}
					],
					againPayPassword:[
						{
							required: true,
							message: '请再次输入交易密码',
							trigger: 'blur'
						},
						{
							validator:(rule,value,callback) =>{
								return this.$u.test.contains(value,this.secondData.payPassword);
							},
							message: '您输入的交易密码不同',
						}
					]
				}
			},
			thirdData:{
				tip:'必须绑定实名认证本人的银行卡',
				bankName:'',
				bankNum:'',
				payeeName:'何勇',
				rule:{
					bankName:[
						{
							required:true,
							message: '请输入开户行',
						}
					],
					bankNum:[
						{
							required:true,
							message: '请输入银行卡号',
						}
					]
				}
			},
			fourthData:{
				alipayNum:'',
				alipayName:'',
				rule:{
					alipayNum:[
						{
							required:true,
							message: '请输入支付宝账号',
						}
					],
					alipayName:[
						{
							required:true,
							message: '请输入支付宝真实姓名',
						}
					]
				}
			},
			fifthData:{
				wechatNum:'',
				wechatName:'',
				rule:{
					wechatNum:[
						{
							required:true,
							message: '请输入微信账号',
						}
					],
					wechatName:[
						{
							required:true,
							message: '请输入微信真实姓名',
						}
					]
				}
			}
		}
	},
	onReady() {
		this.$refs.firstStep.setRules(this.fristData.rule);
		this.$refs.secondStep.setRules(this.secondData.rule);
		this.$refs.thirdStep.setRules(this.thirdData.rule);
		this.$refs.fourthStep.setRules(this.fourthData.rule);
		this.$refs.fifthStep.setRules(this.fifthData.rule);
	},
}