const urls = {
	sys_name: {
		z: '大数据查询系统',
		e: 'sys_name',
	},
	sys_acc: {
		z: '账号',
		e: 'sys_acc',
	},
	sys_pwd: {
		z: '密码',
		e: 'sys_pwd',
	},
	remember: {
		z: '记住密码',
		e: 'remember',
	},
	login: {
		z: '登录',
		e: 'login',
	},
	index: {
		z: '首页',
		e: 'index',
	},
	h_valuate: {
		z: '房屋估值查询',
		e: 'h_valuate',
	},
	person_check: {
		z: '自然人风险查询',
		e: 'person_check',
	},
	comp_check: {
		z: '企业风险查询',
		e: 'comp_check',
	},
	check_log: {
		z: '查询记录',
		e: 'check_log',
	},
	change_pwd: {
		z: '修改密码',
		e: 'change_pwd',
	},
	logout: {
		z: '退出',
		e: 'logout',
	},
	back: {
		z: '返回',
		e: 'back',
	},
	input: {
		z: '输入',
		e: 'input',
	},
	h_location: {
		z: '房屋坐落',
		e: 'h_location',
	},
	h_area: {
		z: '房屋建筑面积(㎡)',
		e: 'h_area',
	},
	h_attr: {
		z: '房屋性质',
		e: 'h_attr',
	},
	h_use: {
		z: '用途',
		e: 'h_use',
	},
	h_build: {
		z: '建成年代',
		e: 'h_build',
	},
	h_sou: {
		z: '房屋朝向',
		e: 'h_sou',
	},
	total_floor: {
		z: '总楼层数',
		e: 'total_floor',
	},
	h_floor: {
		z: '所在楼层',
		e: 'h_floor',
	},
	h_valuate_r: {
		z: '房屋估值情况表',
		e: 'h_valuate_r',
	},
	build_year: {
		z: '房龄',
		e: 'build_year',
	},
	h_s_price: {
		z: '房屋单价(元/平米)',
		e: 'h_s_price',
	},
	h_t_price: {
		z: '房屋总价(万)',
		e: 'h_t_price',
	},
	normal_price: {
		z: '行政区均价(元/平米)',
		e: 'normal_price',
	},
	deal_cycle: {
		z: '成交周期(日)',
		e: 'deal_cycle',
	},
	near_price: {
		z: '周边小区价格',
		e: 'near_price',
	},
	valuation: {
		z: '估值',
		e: 'valuation',
	},
	p_c_result: {
		z: '自然人风险查询结果',
		e: 'p_c_result',
	},
	check: {
		z: '查询',
		e: 'check',
	},
	c_name: {
		z: '客户姓名',
		e: 'c_name',
	},
	c_id: {
		z: '客户证件号码',
		e: 'c_id',
	},
	c_tel: {
		z: '客户电话',
		e: 'c_tel',
	},
	court_case : {
		z: '法院涉诉',
		e: 'court_case',
	},
	court_exec: {
		z: '法院被执行人',
		e: 'court_exec',
	},
	dis_exec: {
		z: '失信被执行人',
		e: 'dis_exec',
	},
	network: {
		z: '网络借贷黑名单',
		e: 'network',
	},
	tax_no: {
		z: '税务负面',
		e: 'tax_no',
	},
	serious_no: {
		z: '严重违法',
		e: 'serious_no',
	},
	over_date: {
		z: '信贷逾期',
		e: 'over_date',
	},
	muti_owe: {
		z: '多头借贷',
		e: 'muti_owe',
	},
	risk_info: {
		z: '风险信息',
		e: 'risk_info',
	},
	person_info: {
		z: '自然人信息',
		e: 'person_info',
	},
	comp_info: {
		z: '企业信息',
		e: 'comp_info',
	},

	comp_name: {
		z: '企业名称',
		e: 'comp_name',
	},
	comp_risk_r: {
		z: '企业风险查询结果',
		e: 'comp_risk_r',
	},
	comp_id: {
		z: '统一社会信用代码',
		e: 'comp_id',
	},
	comp_person: {
		z: '法定代表人',
		e: 'comp_person',
	},
	comp_mon: {
		z: '注册资本',
		e: 'comp_mon',
	},
	comp_from: {
		z: '营业期限自',
		e: 'comp_from',
	},
	comp_to: {
		z: '营业期限至',
		e: 'comp_to',
	},
	comp_status: {
		z: '登记状态',
		e: 'comp_status',
	},
	comp_l: {
		z: '住所',
		e: 'comp_l',
	},
	comp_range: {
		z: '经营范围',
		e: 'comp_range',
	},

	comp_bad: {
		z: '经营异常',
		e: 'comp_bad',
	},
	comp_punish: {
		z: '行政处罚',
		e: 'comp_punish',
	},
	comp_seal: {
		z: '股权出质',
		e: 'comp_seal',
	},
	comp_diya: {
		z: '动产抵押',
		e: 'comp_diya',
	},
	comp_qian: {
		z: '欠税公告',
		e: 'comp_qian',
	},
	comp_sifa: {
		z: '司法拍卖',
		e: 'comp_sifa',
	},
	comp_court: {
		z: '法律诉讼',
		e: 'comp_court',
	},
	comp_court_p: {
		z: '法院公告',
		e: 'comp_court_p',
	},
	court_notice: {
		z: '开庭公告',
		e: 'court_notice',
	},
	comp_risk: {
		z: '企业风险',
		e: 'comp_risk',
	},


	sys_acc_plho: {
		z: '请输入手机号',
		e: 'phone number',
	},
	sys_pwd_plho: {
		z: '请输入密码',
		e: 'password',
	},
}

// 外部方法
const LL = (key) => {
	if (key && urls[key]) {
		const value = urls[key]
		return value
	} else {
		console.log("没有对应的key")
		return ''
	}
}

export default LL