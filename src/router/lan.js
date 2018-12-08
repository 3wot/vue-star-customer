const urls = {
	sys_name: {
		z: '大数据查询系统',
		e: 'SYSTEM NAME',
	},
	sys_acc: {
		z: '账号',
		e: 'account',
	},
	sys_pwd: {
		z: '密码',
		e: '',
	},
	remember: {
		z: '记住密码',
		e: '',
	},
	login: {
		z: '登录',
		e: '',
	},
	index: {
		z: '首页',
		e: '',
	},
	h_valuate: {
		z: '房屋估值查询',
		e: '',
	},
	person_check: {
		z: '自然人风险查询',
		e: '',
	},
	comp_check: {
		z: '企业风险查询',
		e: '',
	},
	check_log: {
		z: '查询记录',
		e: '',
	},
	change_pwd: {
		z: '修改密码',
		e: '',
	},
	logout: {
		z: '退出',
		e: '',
	},
	back: {
		z: '返回',
		e: '',
	},
	input: {
		z: '输入',
		e: '',
	},
	h_location: {
		z: '房屋坐落',
		e: '',
	},
	h_area: {
		z: '房屋建筑面积(㎡)',
		e: '',
	},
	h_attr: {
		z: '房屋性质',
		e: '',
	},
	h_use: {
		z: '用途',
		e: '',
	},
	h_build: {
		z: '建成年代',
		e: '',
	},
	h_sou: {
		z: '房屋朝向',
		e: '',
	},
	total_floor: {
		z: '总楼层数',
		e: '',
	},
	h_floor: {
		z: '所在楼层',
		e: '',
	},
	h_valuate_r: {
		z: '房屋估值情况表',
		e: '',
	},
	build_year: {
		z: '房龄',
		e: '',
	},
	h_s_price: {
		z: '房屋单价(元/平米)',
		e: '',
	},
	h_t_price: {
		z: '房屋总价(万)',
		e: '',
	},
	normal_price: {
		z: '行政区均价(元/平米)',
		e: '',
	},
	deal_cycle: {
		z: '成交周期(日)',
		e: '',
	},
	near_price: {
		z: '周边小区价格',
		e: '',
	},
	valuation: {
		z: '估值',
		e: '',
	},
	p_c_result: {
		z: '自然人风险查询结果',
		e: '',
	},
	check: {
		z: '查询',
		e: '',
	},
	c_name: {
		z: '客户姓名',
		e: '',
	},
	c_id: {
		z: '客户证件号码',
		e: '',
	},
	c_tel: {
		z: '客户电话',
		e: '',
	},
	court_case : {
		z: '法院涉诉',
		e: '',
	},
	court_exec: {
		z: '法院被执行人',
		e: '',
	},
	dis_exec: {
		z: '失信被执行人',
		e: '',
	},
	network: {
		z: '网络借贷黑名单',
		e: '',
	},
	tax_no: {
		z: '税务负面',
		e: '',
	},
	serious_no: {
		z: '严重违法',
		e: '',
	},
	over_date: {
		z: '信贷逾期',
		e: '',
	},
	muti_owe: {
		z: '多头借贷',
		e: '',
	},
	risk_info: {
		z: '风险信息',
		e: '',
	},
	person_info: {
		z: '自然人信息',
		e: '',
	},
	comp_info: {
		z: '企业信息',
		e: '',
	},

	comp_name: {
		z: '企业名称',
		e: '',
	},
	comp_risk_r: {
		z: '企业风险查询结果',
		e: '',
	},
	comp_id: {
		z: '统一社会信用代码',
		e: '',
	},
	comp_person: {
		z: '法定代表人',
		e: '',
	},
	comp_mon: {
		z: '注册资本',
		e: '',
	},
	comp_from: {
		z: '营业期限自',
		e: '',
	},
	comp_to: {
		z: '营业期限至',
		e: '',
	},
	comp_status: {
		z: '登记状态',
		e: '',
	},
	comp_l: {
		z: '住所',
		e: '',
	},
	comp_range: {
		z: '经营范围',
		e: '',
	},

	comp_bad: {
		z: '经营异常',
		e: '',
	},
	comp_punish: {
		z: '行政处罚',
		e: '',
	},
	comp_seal: {
		z: '股权出质',
		e: '',
	},
	comp_diya: {
		z: '动产抵押',
		e: '',
	},
	comp_qian: {
		z: '欠税公告',
		e: '',
	},
	comp_sifa: {
		z: '司法拍卖',
		e: '',
	},
	comp_court: {
		z: '法律诉讼',
		e: '',
	},
	comp_court_p: {
		z: '法院公告',
		e: '',
	},
	court_notice: {
		z: '开庭公告',
		e: '',
	},
	comp_risk: {
		z: '企业风险',
		e: '',
	},
}

// 外部方法
const LL = (key) => {
	if (key && urls[key]) {
		const value = urls[key][LAN_TEMP]
		return value
	} else {
		console.log("没有对应的key")
		return ''
	}
}

export default LL