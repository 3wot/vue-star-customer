<template>
	<div class="login">

		<img class="bg" src="../../static/login.jpg">


		<div class="login-logo">
			<img src="../../static/hlogo.png">

		</div>
		<div class="login-form">
			<p class="login-title">修改密码</p>
			<el-form :model="loginForm" :rules="rules" label-width="90px" label-position="left">
				<el-form-item label="账号" prop="mobile">
					<el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item label="旧密码" prop="pwd">
					<el-input type="password" placeholder="请输入旧密码" v-model="loginForm.pwd"></el-input>
				</el-form-item>

				<el-form-item label="新密码" prop="newPwd">
					<el-input type="password" placeholder="请输入新密码" v-model="loginForm.newPwd"></el-input>
				</el-form-item>

			 	<el-form-item>
				    <el-button type="primary" @click="handleLogin">修改</el-button>
				    <el-button type="primary" @click="gotoLogin">返回登录</el-button>
			  	</el-form-item>

			</el-form>

		</div>
		

	</div>
</template>

<script>


export default {
	components:{

	},
	name: 'Login',
	data () {
		return {
			loginForm : {
				mobile: '',
				pwd: '',
				newPwd: '',
				remember: false,	
			},
			
			rules : {
				mobile : [
				 	{ required: true, message: '请输入手机号', trigger: 'blur' },
				],
				pwd : [
				 	{ required: true, message: '请输入旧密码', trigger: 'blur' }
				],
				newPwd : [
				 	{ required: true, message: '请输入新密码', trigger: 'blur' }
				],
			},
		}
	},
	mounted () {
		
		
	},
	methods:{
		
		// 记录名字和密码
		setName () {
			// console.log('记录名字')
			const data = {
				mobile: this.loginForm.mobile,
				pwd: this.loginForm.pwd
			}
			this.JCACHE.set('name', data)
		},

		// 获取名字和密码
		getName () {
			const data = this.JCACHE.get('name')
			// console.log('获取名字和密码',data)
			if (data) {
				const { mobile, pwd } = data
				this.loginForm.mobile = mobile
				this.loginForm.pwd = pwd	
			}
		},

		// 返回登录
		gotoLogin () {
			this.$router.push({ name : 'login' })
		},

		// 登录
		handleLogin () {
			const { pwd, mobile, newPwd } = this.loginForm
			
			if (mobile && pwd) {
				const platform = "pc"
				const param = {
					mobile,
					pwd,
					platform,
				}
				this.pp('Login', param, res => {
					if (res.ret) {
						const { 
							uid,
							token,
						} = res.data || {}
						window.sessionStorage.setItem('uid',uid)
						window.sessionStorage.setItem('token',token)

						const cparam = {
							oldPassword: pwd,
							newPassword: newPwd,
						}
						this.pp('ChangePwd', cparam, res => {
							if (res.ret) {
								this.$message({
						          	message: '修改成功，请返回登录页面，重新登录',
						          	type: 'warning',
						        })
							} else {
								this.$message({
						          	message: res.msg,
						          	type: 'warning',
						        })
							}
						})
					} else {
						this.$message({
				          	message: res.msg,
				          	type: 'warning',
				        })
					}
				})
			} else {
				this.$message({
		          	message: '请输入手机号和密码',
		          	type: 'warning',
		        })
			}
		},



	},


}
</script>

<style scoped>
.login {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
	text-align: left;
}

.login img.bg {
	position: absolute;
	left: 0px;
	top: 0px;
	height: 100%;
	width: 100%;
	z-index: -1;
}
.login-form {
	width: 350px;
	margin: 0 auto;
	margin-top: 200px;
	background-color: #ffffff;
	border-radius: 10px;
	padding: 30px;
	z-index: 99;
}
.login-logo {
	position: absolute;
	text-align: center;
	top: 120px;
	left: 0px;
	right: 0px;
}
.login-logo img {
	width: 180px;
	margon: 0 auto;
}
.login-title {
    margin-top: -10px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
.change-pwd {
	float: right;
}
.change-pwd a{
	text-decoration: none;
	color: #409eff;
}

</style>
