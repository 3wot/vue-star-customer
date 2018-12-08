<template>
	<div class="first-check">
		<el-container class="c-outer">

			<Header back="true" title="企业风险查询"></Header>
			
			<el-main class="c-main">
				<div class="sec">
					<p class="main-title"><span class="span-title">输入</span></p>
					<el-form :size="formSize" label-width="140px" label-position="left">
						<el-row :gutter="15">
							<el-col :span="15">
								<el-form-item label="企业名称" class="label-danger">
									<el-input v-model="CompanyName" placeholder="请输入企业名称"></el-input>
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
					<table class="show-table" cellpadding="0" cellspacing="0" border="1">
						<tbody>
							<tr>
								<td colspan="2">
									<img class="header1" src="../../static/header1.png">
								</td>
								<td colspan="4">
									<span>企业风险查询结果</span>
								</td>
							</tr>
							<tr>
								<td colspan="7" class="bg-e">企业信息</td>
							</tr>
							<tr>
								<td colspan="1">企业名称：</td>
								<td colspan="2">{{CompanyName || '-'}}</td>
								<td colspan="1">统一社会信用代码：</td>
								<td colspan="2">{{CorpCreditCode|| '-'}}</td>
							</tr>
							<tr>
								<td colspan="1">法定代表人：</td>
								<td colspan="2">{{CompanyLegalPerson || '-'}}</td>
								<td colspan="1">注册资本：</td>
								<td colspan="2">{{RegisterCapital || '-'}}</td>
							</tr>
							<tr>
								<td colspan="1">营业期限自：</td>
								<td colspan="2">{{time(BusinessStartDate) || '-'}}</td>
								<td colspan="1">营业期限至：</td>
								<td colspan="2">{{time(BusinessEndDate) || '-'}}</td>
							</tr>
							<tr>
								<td colspan="1">登记状态：</td>
								<td colspan="2">{{Status || '-'}}</td>
								<td colspan="1">住所：</td>
								<td colspan="2">{{Address || '-'}}</td>
							</tr>
							<tr>
								<td colspan="1">经营范围：</td>
								<td colspan="5">{{BusinessScope || '-'}}</td>
							</tr>
							<tr>
								<td colspan="7" class="bg-e">风险信息</td>
							</tr>
							<tr>
								<td>经营异常</td>
								<td colspan="5">
									{{ BusinessInfo || '-'}}
								</td>

							</tr>
							<tr>
								<td>行政处罚</td>
								<td colspan="5">
									{{ AdministrativePenaltyInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>股权出质</td>
								<td colspan="5">
									{{ SharePledgeInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>动产抵押</td>
								<td colspan="5">
									{{ MovablesPledgeInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>欠税公告</td>
								<td colspan="5">
									{{ TaxOwingInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>司法拍卖</td>
								<td colspan="5">
									{{ JudicialSaleInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>法律诉讼</td>
								<td colspan="5">
									{{ LawsuitInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>法院公告</td>
								<td colspan="5">
									{{ CourtAnnouncementInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>开庭公告</td>
								<td colspan="5">
									{{ TrialInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>失信被执行人</td>
								<td colspan="5">
									{{ CreditEnforcementInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>法院被执行人</td>
								<td colspan="5">
									{{ CourtEnforcementInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>严重违法</td>
								<td colspan="5">
									{{ CriminalInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>企业风险</td>
								<td colspan="5">
									{{ RiskInfo || '-'}}
								</td>
							</tr>
		<!-- 					<tr>
								<td>经营范围</td>
								<td colspan="5">
									{{ BusinessScope || '-'}}
								</td>
							</tr> -->
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
			
			CompanyName: '',
			
			CorpCreditCode: '',
			CompanyLegalPerson: '',
			RegisterCapital: '',
			BusinessStartDate: '',
			BusinessEndDate: '',
			Status: '',
			Address: '',
			BusinessInfo: '',
			AdministrativePenaltyInfo: '',
			SharePledgeInfo: '',
			MovablesPledgeInfo: '',
			TaxOwingInfo: '',
			JudicialSaleInfo: '',
			LawsuitInfo: '',
			CourtAnnouncementInfo: '',
			TrialInfo: '',
			CreditEnforcementInfo: '',
			CourtEnforcementInfo: '',
			CriminalInfo: '',
			RiskInfo: '',
			BusinessScope: '',
	}
},
mounted () {
},
methods:{

	// 初审
	firstCheck () {
		const {
			CompanyName
		} = this
		const param = {
		  	CompanyName,
		}
		if (!CompanyName) {
			this.warn('请输入企业名称！')
			return
		}
		this.loading = true
		this.pp('GetCompanyInfo', param, res => {
			this.loading = false
			if (res.ret) {
				const {
					CorpCreditCode,
					CompanyLegalPerson,
					RegisterCapital,
					BusinessStartDate,
					BusinessEndDate,
					Status,
					Address,
					BusinessInfo,
					AdministrativePenaltyInfo,
					SharePledgeInfo,
					MovablesPledgeInfo,
					TaxOwingInfo,
					JudicialSaleInfo,
					LawsuitInfo,
					CourtAnnouncementInfo,
					TrialInfo,
					CreditEnforcementInfo,
					CourtEnforcementInfo,
					CriminalInfo,
					RiskInfo,
					BusinessScope,
				} = res.data || {}
				this.CorpCreditCode = CorpCreditCode
				this.CompanyLegalPerson = CompanyLegalPerson
				this.RegisterCapital = RegisterCapital
				this.BusinessStartDate = BusinessStartDate
				this.BusinessEndDate = BusinessEndDate
				this.Status = Status
				this.Address = Address
				this.BusinessInfo = BusinessInfo
				this.AdministrativePenaltyInfo = AdministrativePenaltyInfo
				this.SharePledgeInfo = SharePledgeInfo
				this.MovablesPledgeInfo = MovablesPledgeInfo
				this.TaxOwingInfo = TaxOwingInfo
				this.JudicialSaleInfo = JudicialSaleInfo
				this.LawsuitInfo = LawsuitInfo
				this.CourtAnnouncementInfo = CourtAnnouncementInfo
				this.TrialInfo = TrialInfo
				this.CreditEnforcementInfo = CreditEnforcementInfo
				this.CourtEnforcementInfo = CourtEnforcementInfo
				this.CriminalInfo = CriminalInfo
				this.RiskInfo = RiskInfo
				this.BusinessScope = BusinessScope
			} else {
				this.warn(res.msg)
			}
		})
	},

	time(num) {
		if (num) {
			const a = parseInt(num)
			const time = new Date(a)
			const year = time.getFullYear()
			const month = time.getMonth() + 1
			const day = time.getDate()
			return year + '-' + month + '-' + day	
		} else {
			return ''
		}
		
	},

	// 去详情页面
	gotoDetail(type) {
		const name = this.CompanyName
		// this.$router.push({ name : 'firstDetail', params: { name }})
		let routeData = this.$router.resolve({
			name: "firstDetail",
		   	// query: params,
		   	params:{ name }
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
