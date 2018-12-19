import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Valuation from '@/components/Valuation'
import FirstCheck from '@/components/FirstCheck'
import FirstDetail from '@/components/FirstDetail'
import FirCheck from '@/components/FirCheck'
import Change from '@/components/Change'
import History from '@/components/History'
import FirstCheckResult from '@/components/FirstCheckResult'
import FirCheckResult from '@/components/FirCheckResult'
import ValuationResult from '@/components/ValuationResult'

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
			// 估值
			path: '/firCheck',
			name: 'firCheck',
			component: FirCheck
		},
		{
			// 初审
			path: '/firstCheck',
			name: 'firstCheck',
			component: FirstCheck
		},
		{
			// 详情
			path: '/firstDetail/:name/:hid/:id?',
			name: 'firstDetail',
			component: FirstDetail
		},
		{
			// 修改密码
			path: '/change',
			name: 'change',
			component: Change
		},
		{
			// 查询历史
			path: '/history/:type',
			name: 'history',
			component: History
		},
		{
			// 自然人结果
			path: '/firstCheckResult/:hid',
			name: 'firstCheckResult',
			component: FirstCheckResult
		},
		{
			// 企业结果
			path: '/firCheckResult/:hid',
			name: 'firCheckResult',
			component: FirCheckResult
		},
		{
			// 估值结果
			path: '/valuationResult/:hid',
			name: 'valuationResult',
			component: ValuationResult
		},
		
		
	]
})
