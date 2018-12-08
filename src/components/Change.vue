<template>
	<div class="change">
		<el-container class="c-outer">

			<Header title="修改密码"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<el-form class="m-t-20" label-width="200px" label-position="left">
						<el-row :gutter="15">
							<el-col :span="20">
								<el-form-item label="请输入旧密码" class="label-danger">
									<el-input type="number" v-model="loginForm.pwd" placeholder="请输入旧密码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="20">
								<el-form-item label="请输入新密码" class="label-danger">
									<el-input type="text" v-model="loginForm.newPwd" placeholder="请输入新密码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="20">
								<el-form-item label="请再次输入新密码" class="label-danger">
									<el-input type="text" v-model="loginForm.newPwd1" placeholder="请再次输入新密码"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="20">
								<el-form-item label="" class="text-left">
									<el-button type="primary" @click="handleLogin">确定</el-button>
				    				<el-button type="primary" @click="gotoLogin">返回登录</el-button>
								</el-form-item>
							</el-col>

						</el-row>
					</el-form>
				</div>
			</el-main>
		</el-container>

	</div>
</template>

<script>
import Header from './Header'
import L from '@/router/lan.js'
export default {
	components:{
		Header,
	},
	name: 'Change',
	data () {
		return {
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
					        this.warn('修改成功，请返回登录页面，重新登录')
						} else {
							this.warn(res.msg)
						}
					})	
				} else {
					this.warn('两次输入的新密码不一致，请您重新输入')	
				}
					
			} else {
				this.warn('请输入标红项！')
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
