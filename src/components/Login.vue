<template>
	<div class="login">

		<img class="bg" src="../../static/login.jpg">


		<div class="login-logo">
			<img src="../../static/hlogo.png">

		</div>
		<div class="login-form">
			<p class="login-title">{{LL('sys_name')[ZZ.KK]}} 1.0</p>
			<el-form :model="loginForm" label-width="150px" label-position="left">
				<el-form-item :label="LL('sys_acc')[ZZ.KK]" prop="mobile">
					<el-input v-model="loginForm.mobile" :placeholder="LL('sys_acc_plho')[ZZ.KK]"></el-input>
				</el-form-item>
				<el-form-item :label="LL('sys_pwd')[ZZ.KK]" prop="pwd">
					<el-input type="password" :placeholder="LL('sys_pwd_plho')[ZZ.KK]" v-model="loginForm.pwd"></el-input>
				</el-form-item>

				<el-form-item :label="LL('remember')[ZZ.KK]">
				    <el-switch
					  	v-model="loginForm.remember"
					  	active-color="#13ce66"
					  	inactive-color="#aaaaaa">
					</el-switch>
					<!-- <span class="change-pwd">
						<router-link :to="{ name: 'change' }">
							<span class="link">修改密码</span>
						</router-link>
					</span> -->

			  	</el-form-item>

			 	<el-form-item>
				    <el-button type="primary" @click="handleLogin">{{LL('login')[ZZ.KK]}}</el-button>
				    <!-- <el-button type="primary" @click="gotoChange">修改密码</el-button> -->
			  	</el-form-item>

			</el-form>

		</div>
		
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from './Footer'

export default {
	components:{
		Footer,
	},
	name: 'Login',
	data () {
		return {
			loginForm : {
				mobile: '',
				pwd: '',
				remember: false,	
			},

			ZZ: {}
		}
	},
	mounted () {
		// 获取记录的名字和密码
		this.getName()
		this.ZZ = this.TT
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

		// 修改密码
		gotoChange () {
			this.$router.push({ name : 'change' })
		},

		// 登录
		handleLogin () {
			const { pwd, mobile, remember } = this.loginForm
			
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
							OperatorRoleId,
							OperatorRoleName,
							Username,
						} = res.data || {}

						USER_INFO.uid = uid
						USER_INFO.token = token
						USER_INFO.OperatorRoleId = OperatorRoleId
						USER_INFO.OperatorRoleName = OperatorRoleName
						USER_INFO.Username = Username
						
						window.sessionStorage.setItem('uid',uid)
						window.sessionStorage.setItem('token',token)
						window.sessionStorage.setItem('OperatorRoleId',OperatorRoleId)
						window.sessionStorage.setItem('Username',Username)
						// 首页
						this.$router.push({ name : 'index' })
					} else {
				        this.warn(res.msg)
					}
				})
				// 记住密码
				if (remember) {
					this.setName()
				}
			} else {
		        this.warn('请输入手机号和密码','Please complete phone number and password.')
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
	width: 500px;
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
