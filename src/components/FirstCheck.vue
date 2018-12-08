<template>
	<div class="first-check">
		<el-container class="c-outer">

			<Header back="true" title="自然人风险查询"></Header>

			<el-main class="c-main">
				<div class="sec">
					<p class="main-title"><span class="span-title">输入</span></p>
					<el-form :size="formSize" label-width="140px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="15">
								<el-form-item label="客户姓名" class="label-danger">
									<el-input v-model="BorrowerName" placeholder="请输入客户姓名"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="15">
								<el-form-item label="客户证件号码" class="label-danger">
									<el-input v-model="BorrowerIDNO" placeholder="请输入客户证件号码"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="15">
								<el-form-item label="客户电话" class="label-danger">
									<el-input v-model="BorrowerMobile" placeholder="请输入客户电话"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="24">
								<el-button class="pull-left" type="primary" @click="firstCheck">查询</el-button>
								<span v-if="loading" class="loading"><i class="el-icon-loading"></i></span>
							</el-col>
						</el-row>
						

					</el-form>
				</div>
				<div class="sec">
					<!-- <p class="main-title"><span class="span-title">表格</span></p> -->
					<table class="show-table" cellpadding="0" cellspacing="0" border="1">
						<tbody>
							<tr>
								<td colspan="2">
									<img class="header1" src="../../static/header1.png">
								</td>
								<td colspan="4">
									<span>自然人风险查询结果</span>
								</td>
							</tr>
							<tr>
								<td colspan="7" class="bg-e">自然人信息</td>
							</tr>
							<tr>
								<td colspan="1">客户姓名：</td>
								<td colspan="1">{{BorrowerName || '-'}}</td>
								<td colspan="1">证件号码：</td>
								<td colspan="1">{{BorrowerIDNO || '-'}}</td>
								<td colspan="1">联系电话：</td>
								<td colspan="1">{{BorrowerMobile || '-'}}</td>
							</tr>
							<tr>
								<td colspan="7" class="bg-e">风险信息</td>
							</tr>
							<tr>
								<td>法院涉诉</td>
								<td colspan="5">{{LawsuitInfo||'-'}}</td>
							</tr>
							<tr>
								<td>法院被执行人</td>
								<td colspan="5">
									{{EnforcementInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>失信被执行人</td>
								<td colspan="5">
									{{CreditInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>网络借贷黑名单</td>
								<td colspan="5">
									{{P2PBlacklistInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>税务负面</td>
								<td colspan="5">
									{{TaxInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>严重违法</td>
								<td colspan="5">
									{{CriminalInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>信贷逾期</td>
								<td colspan="5">
									{{LoanExpirationInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>多头借贷</td>
								<td colspan="5">
									{{MultipointLendingInfo||'-'}}
								</td>
							</tr>
						</tbody>
					</table>
					
				</div>
			</el-main>
		</el-container>

	</div>
</template>

<script>
import Header from './Header'
import ImgUpload from './ImgUpload'
import ImgList from './ImgList'

export default {
	components:{
		Header, ImgUpload, ImgList
	},
	name: 'FirstCheck',
	data () {
		return {
			loading: false,
			formSize : 'small',

			// 初始化
			"BorrowerIDNO": "",
			"BorrowerMobile": "",
			"BorrowerName": "",

			SecurityInfo: "",
			LawsuitInfo: "",
			EnforcementInfo: "",
			CreditInfo: "",
			P2PBlacklistInfo: "",
			TaxInfo: "",
			CriminalInfo: "",
			LoanExpirationInfo: "",
			MultipointLendingInfo: "",

	}
},
mounted () {
},
methods:{

	// 初审
	firstCheck () {
		const {
			BorrowerIDNO,
			BorrowerMobile,
			BorrowerName,
		} = this
		const param = {
		  	"PersonName" : BorrowerName,
		  	"PersonIDNO": BorrowerIDNO,
  			"PersonMobile": BorrowerMobile,
		}
		if (!BorrowerIDNO || !BorrowerName || !BorrowerMobile) {
			this.warn('请完成标红的项目！')
			return
		}
		this.loading = true
		this.pp('GetPersonInfo', param, res => {
			this.loading = false
			if (res.ret) {
				const {
					SecurityInfo,
					LawsuitInfo,
					EnforcementInfo,
					CreditInfo,
					P2PBlacklistInfo,
					TaxInfo,
					CriminalInfo,
					LoanExpirationInfo,
					MultipointLendingInfo,
				} = res.data || {}
				this.SecurityInfo = SecurityInfo
				this.LawsuitInfo = LawsuitInfo
				this.EnforcementInfo = EnforcementInfo
				this.CreditInfo = CreditInfo
				this.P2PBlacklistInfo = P2PBlacklistInfo
				this.TaxInfo = TaxInfo
				this.CriminalInfo = CriminalInfo
				this.LoanExpirationInfo = LoanExpirationInfo
				this.MultipointLendingInfo = MultipointLendingInfo
			} else {
				this.warn(res.msg)
			}
		})
	},

	// 去详情页面
	gotoDetail(type) {
		const name = this.BorrowerName
		const id = this.BorrowerIDNO
		// this.$router.push({ 'name' : 'firstDetail', params: { name, id }})
		let routeData = this.$router.resolve({
			name: "firstDetail",
		   	// query: params,
		   	params:{ name, id }
		   });
		window.open(routeData.href, '_blank')
	},

},


}
</script>

<style scoped>

.first-check {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.header1 {
	width : 190px;
	height: 50px;
}
table td {
	min-width : 130px;
	padding: 0px;
}
.first-detail {
	color: #409eff;
	cursor: pointer;
}
</style>
