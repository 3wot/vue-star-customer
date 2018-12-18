<template>
	

	<el-header class="c-header">
		<span v-if="back" class="header-back" @click="goBack">{{LL('back')[ZZ.KK]}}</span>
		<span>{{title}}</span>

		<!-- <span class="logout pull-right" @click="logOut">退出</span> -->
		<el-dropdown trigger="click" class="h-name" @command="handleCommand">
			<span class="el-dropdown-link">
				{{Username}}<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="1">
					<span>{{LL('check_log1')[ZZ.KK]}}</span>
				</el-dropdown-item>
				<el-dropdown-item command="2">
					<span>{{LL('check_log2')[ZZ.KK]}}</span>
				</el-dropdown-item>
				<el-dropdown-item command="3">
					<span>{{LL('check_log3')[ZZ.KK]}}</span>
				</el-dropdown-item>
				<el-dropdown-item command="4">
					<span>{{LL('change_pwd')[ZZ.KK]}}</span>
				</el-dropdown-item>
				<el-dropdown-item command="5">
					<span>{{LL('logout')[ZZ.KK]}}</span>
				</el-dropdown-item>
			</el-dropdown-menu>
			</el-dropdown>
		<span v-if="refresh" class="logout pull-right" style="margin-right:15px;" @click="refreshFn">刷新</span>
	</el-header>
		
	
</template>

<script>
// import Router from 'vue-router'
// import GETJSON from '../router/service'


export default {
	components:{
	// Button,Field
	},
	name: 'Header',
	props: ['title','back','refresh','query'],
	data () {
		return {
			Username: '',
			ZZ: {},
		}
	},
	mounted () {
		this.Username = window.sessionStorage.getItem('Username')
		this.ZZ = this.TT
	},
	methods:{

		handleCommand(cmd) {
			if (cmd == 1) {
				this.gotoQuery(1)
			} else if (cmd == 2) {
				this.gotoQuery(2)
			} else if (cmd == 3) {
				this.gotoQuery(3)
			} else if (cmd == 4) {
				this.gotoChange()
			} else if (cmd == 5) {
				this.logOut()
			} 
		},

		// 退出
		logOut() {
			this.$router.push({ name : 'login' })
		},

		// 后退
		goBack () {
			// const { name } = this.$route
			// const { id, hid } = this.$route.params
			// if (name == 'opList' || name == 'look') { // 返回首页
			// 	this.$router.push({ name : 'index' })
			// } else if (name == 'firstDetail') {
			// 	this.$router.go(-1)
			// } else {
			// 	this.$router.push({ name : 'opList', params: { id, hid }})
			// }
			// this.$router.go(-1)
			this.$router.push({ name : 'index'})
		},

		gotoQuery(ty) {
			const type = parseInt(ty)
			this.$router.push({ name : 'history', params: { type }})
			this.$emit('query')
		},

		// 刷新
		refreshFn() {
			this.$emit('refresh')
		},

		gotoChange() {
			this.$router.push({ name : 'change' })
		},
	

	},


}
</script>

<style scoped>

.header-back {
	float: left;
	cursor: pointer;
}
.header-back:hover {
	color: #cccccc;
}
.logout {
	float: right;
	cursor: pointer;
}
.logout:hover {
	color: #cccccc;
}
.h-name {
	float: right;
	color: #ffffff;
}

</style>
