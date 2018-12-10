<template>
	<div class="change">
		<el-container class="c-outer">

			<Header back="true" :title="LL('change_pwd')[ZZ.KK]"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<el-form class="m-t-20" label-width="200px" label-position="left">
						<el-row :gutter="15">
							<el-col :span="20">
								<el-form-item :label="LL('old_pwd')[ZZ.KK]" class="label-danger">
									<el-input type="text" v-model="loginForm.pwd" :placeholder="LL('old_pwd')[ZZ.KK]"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="20">
								<el-form-item :label="LL('new_pwd')[ZZ.KK]" class="label-danger">
									<el-input type="text" v-model="loginForm.newPwd" :placeholder="LL('new_pwd')[ZZ.KK]"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="20">
								<el-form-item :label="LL('new_pwd_once')[ZZ.KK]" class="label-danger">
									<el-input type="text" v-model="loginForm.newPwd1" :placeholder="LL('new_pwd_once')[ZZ.KK]"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="20">
								<el-form-item label="" class="text-left">
									<el-button type="primary" @click="handleLogin">{{LL('confirm_btn')[ZZ.KK]}}</el-button>
				    				<!-- <el-button type="primary" @click="gotoLogin">{{LL('backto_login')[ZZ.KK]}}</el-button> -->
								</el-form-item>
							</el-col>

						</el-row>
					</el-form>
				</div>
			</el-main>
			<Footer></Footer>
		</el-container>

	</div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
	components:{
		Header, Footer,
	},
	name: 'Change',
	data () {
		return {
			ZZ: {},
			loginForm : {
				pwd: '',
				newPwd: '',
				newPwd1: '',	
			},
			
			rules : {
				pwd : [
				 	{ required: true, message: '请输入旧密码', trigger: 'blur' }
				],
				newPwd : [
				 	{ required: true, message: '请输入新密码', trigger: 'blur' }
				],
				newPwd : [
				 	{ required: true, message: '请再次输入新密码', trigger: 'blur' }
				],
			},
		}
	},
	mounted () {
		this.ZZ = this.TT
	},
	methods:{
		
		// 返回登录
		gotoLogin () {
			this.$router.push({ name : 'login' })
		},

		// 登录
		handleLogin () {
			const { pwd, newPwd1, newPwd } = this.loginForm

			if (pwd && newPwd && newPwd1) {
				if (newPwd == newPwd1) {
					const param = {
						oldPassword: pwd,
						newPassword: newPwd,
					}
					this.pp('ChangePwd', param, res => {
						if (res.ret) {
					        // this.warn('修改成功，请返回登录页面，重新登录','Success,please return to the login page and login again')
					        this.warn('修改成功，将返回登录页面，重新登录','Success,please login again')
					        this.gotoLogin()
						} else {
							this.warn(res.msg)
						}
					})	
				} else {
					this.warn('两次输入的新密码不一致，请您重新输入','New passwords are different,please input again.')	
				}
					
			} else {
				this.warn('请完成标红的项目！','Please complete the red input box!')
			}
		},



	},


}
</script>

<style scoped>

.change {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.text-left {
	text-align: left;
}
</style>
