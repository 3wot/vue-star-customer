import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Valuation from '@/components/Valuation'
import FirstCheck from '@/components/FirstCheck'


Vue.use(Router)

export default new Router({
	routes: [

		{
			// 登录
			path: '/',
			name: 'login',
			component: Login
		},
		{
			// 首页
			path: '/index',
			name: 'index',
			component: Index
		},
		{
			// 估值
			path: '/valuation',
			name: 'valuation',
			component: Valuation
		},
		{
			// 初审
			path: '/firstCheck',
			name: 'firstCheck',
			component: FirstCheck
		},
		
	]
})
