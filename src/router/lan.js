const urls = {
	sys_name: {
		z: '大数据查询系统',
		e: 'GM Query System',
	},
	sys_acc: {
		z: '账号',
		e: 'Account Number',
	},
	sys_pwd: {
		z: '密码',
		e: 'Password',
	},
	remember: {
		z: '记住密码',
		e: 'Remember Password',
	},
	login: {
		z: '登录',
		e: 'Login',
	},
	index: {
		z: '首页',
		e: 'Home Page',
	},
	h_valuate: {
		z: '房屋估值查询',
		e: 'House Valuation Query',
	},
	person_check: {
		z: '自然人风险查询',
		e: 'Natural Person Risk Query',
	},
	comp_check: {
		z: '企业风险查询',
		e: 'Company Risk Query',
	},
	check_log1: {
		z: '估值查询记录',
		e: 'Valuation Query Records',
	},
	check_log2: {
		z: '自然人查询记录',
		e: 'Person Query Records',
	},
	check_log3: {
		z: '企业查询记录',
		e: 'Company Query Records',
	},
	change_pwd: {
		z: '修改密码',
		e: 'Change Passpord',
	},
	logout: {
		z: '退出',
		e: 'Log Out',
	},
	back: {
		z: '返回',
		e: 'Return',
	},
	input: {
		z: '输入',
		e: 'Input',
	},
	h_location: {
		z: '房屋坐落',
		e: 'House Location',
	},
	h_area: {
		z: '房屋建筑面积(㎡)',
		e: 'House Construction Area(㎡)',
	},
	h_attr: {
		z: '房屋性质',
		e: 'Property of House',
	},
	h_use: {
		z: '用途',
		e: 'Housing Purpose',
	},
	h_build: {
		z: '建成年代',
		e: 'Date of Construction',
	},
	h_sou: {
		z: '房屋朝向',
		e: 'Orientation of House',
	},
	total_floor: {
		z: '总楼层数',
		e: 'Total Floor',
	},
	h_floor: {
		z: '所在楼层',
		e: 'House Floor',
	},
	h_valuate_r: {
		z: '房屋估值情况表',
		e: 'House Valuation Report',
	},
	build_year: {
		z: '房龄',
		e: 'House Building Year',
	},
	h_s_price: {
		z: '房屋单价(元/平米)',
		e: 'House Unit Price(CNY/square meters)',
	},
	h_t_price: {
		z: '房屋总价(万)',
		e: 'House Total Price(Thousands)',
	},
	normal_price: {
		z: '行政区均价(元/平米)',
		e: 'Administrative Area Average Price(CNY/square meters)',
	},
	deal_cycle: {
		z: '成交周期(日)',
		e: 'Transaction Cycle(Daily)',
	},
	near_price: {
		z: '周边小区价格',
		e: 'Surrounding Communities Price',
	},
	valuation: {
		z: '估值',
		e: 'Valuation',
	},
	p_c_result: {
		z: '自然人风险查询结果',
		e: 'Natural Person Risk Query Result',
	},
	check: {
		z: '查询',
		e: 'Query',
	},
	c_name: {
		z: '客户姓名',
		e: 'Client Name',
	},
	c_id: {
		z: '客户证件号码',
		e: 'Client ID Number',
	},
	c_tel: {
		z: '客户电话',
		e: 'Client Mobile Number',
	},
	court_case : {
		z: '法院涉诉',
		e: 'Court Case',
	},
	court_exec: {
		z: '法院被执行人',
		e: 'Court Executor',
	},
	dis_exec: {
		z: '失信被执行人',
		e: 'Dishonest Executor',
	},
	network: {
		z: '网络借贷黑名单',
		e: 'Blacklist of Internet Lending',
	},
	tax_no: {
		z: '税务负面',
		e: 'Tax Negative',
	},
	serious_no: {
		z: '严重违法',
		e: 'Setious Violation of Law',
	},
	over_date: {
		z: '信贷逾期',
		e: 'Overdue Credit',
	},
	muti_owe: {
		z: '多头借贷',
		e: 'Borrowing from Multiple Sources',
	},
	risk_info: {
		z: '风险信息',
		e: 'Risk Information',
	},
	person_info: {
		z: '自然人信息',
		e: 'Natural Person Information',
	},
	comp_info: {
		z: '企业信息',
		e: 'Company Information',
	},
	comp_name: {
		z: '企业名称',
		e: 'Company Name',
	},
	comp_risk_r: {
		z: '企业风险查询结果',
		e: 'Company Risk Query Result',
	},
	comp_id: {
		z: '统一社会信用代码',
		e: 'Company Unified Social Credit Code',
	},
	comp_person: {
		z: '法定代表人',
		e: 'Legal Representative',
	},
	comp_mon: {
		z: '注册资本',
		e: 'Registered Capital',
	},
	comp_from: {
		z: '营业期限自',
		e: ' Business Term From ',
	},
	comp_to: {
		z: '营业期限至',
		e: 'Business Term To',
	},
	comp_status: {
		z: '登记状态',
		e: 'Registration Status',
	},
	comp_l: {
		z: '住所',
		e: 'Company Residence',
	},
	comp_range: {
		z: '经营范围',
		e: 'Business Scope',
	},
	comp_bad: {
		z: '经营异常',
		e: 'Abnormal Business',
	},
	comp_punish: {
		z: '行政处罚',
		e: 'Administrative Penalty',
	},
	comp_seal: {
		z: '股权出质',
		e: 'Equity Pledge',
	},
	comp_diya: {
		z: '动产抵押',
		e: 'Chattel Mortgate',
	},
	comp_qian: {
		z: '欠税公告',
		e: 'Notice of Tax Arrears',
	},
	comp_sifa: {
		z: '司法拍卖',
		e: 'Judicial Auction',
	},
	comp_court: {
		z: '法律诉讼',
		e: 'Legal Proceedings',
	},
	comp_court_p: {
		z: '法院公告',
		e: 'Court Notice',
	},
	court_notice: {
		z: '开庭公告',
		e: 'Announcement of Court Session',
	},
	comp_risk: {
		z: '企业风险',
		e: 'Company Risk',
	},

	sys_acc_plho: {
		z: '请输入手机号',
		e: 'Phone Number',
	},
	sys_pwd_plho: {
		z: '请输入密码',
		e: 'Password',
	},
	old_pwd: {
		z: '旧密码',
		e: 'Old Password',
	},
	new_pwd: {
		z: '新密码',
		e: 'New Password',
	},
	new_pwd_once: {
		z: '重复新密码',
		e: 'New Password Again',
	},
	confirm_btn: {
		z: '确定',
		e: 'Confirm',
	},
	backto_login: {
		z: '返回登录',
		e: 'To Login',
	},
	query_record: {
		z: '历史查询记录',
		e: 'Query Records',
	},
	query_r_id: {
		z: '订单编号',
		e: 'Order Number',
	},
	query_r_c: {
		z: '查询内容',
		e: 'Query Content',
	},
	query_r_k: {
		z: '查询关键字',
		e: 'Query Keywords',
	},
	query_r_t: {
		z: '下单时间',
		e: 'Query Time',
	},
	prev: {
		z: '上一页',
		e: 'Previous',
	},
	next: {
		z: '下一页',
		e: 'Next',
	},
	di: {
		z: '第',
		e: '',
	},
	page: {
		z: '页',
		e: 'Page',
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