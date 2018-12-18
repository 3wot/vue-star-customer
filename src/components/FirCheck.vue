<template>
	<div class="first-check">
		<el-container class="c-outer">

			<Header back="true" :title="LL('comp_check')[ZZ.KK]"></Header>
			
			<el-main class="c-main">
				<div class="sec">
					<p class="main-title"><span class="span-title">{{LL('input')[ZZ.KK]}}</span></p>
					<el-form :size="formSize" label-width="170px" label-position="left">
						<el-row :gutter="15">
							<el-col :span="15">
								<el-form-item :label="LL('comp_name')[ZZ.KK]" class="label-danger">
									<el-input @input="handleNameChange" v-model="CompanyName" :placeholder="LL('comp_name')[ZZ.KK]"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="24">
								<el-button class="pull-left" type="primary" @click="firstCheck">{{LL('check')[ZZ.KK]}}</el-button>
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
									<span>{{LL('comp_risk_r')[ZZ.KK]}}</span>
								</td>
							</tr>
							<tr>
								<td colspan="6" class="bg-e">{{LL('comp_info')[ZZ.KK]}}</td>
							</tr>
							<tr>
								<td colspan="1">{{LL('comp_name')[ZZ.KK]}}：</td>
								<td colspan="2">{{CompanyName || '-'}}</td>
								<td colspan="1">{{LL('comp_id')[ZZ.KK]}}：</td>
								<td colspan="2">{{CorpCreditCode|| '-'}}</td>
							</tr>
							<tr>
								<td colspan="1">{{LL('comp_person')[ZZ.KK]}}：</td>
								<td colspan="2">{{CompanyLegalPerson || '-'}}</td>
								<td colspan="1">{{LL('comp_mon')[ZZ.KK]}}：</td>
								<td colspan="2">{{RegisterCapital || '-'}}</td>
							</tr>
							<tr>
								<td colspan="1">{{LL('comp_from')[ZZ.KK]}}：</td>
								<td colspan="2">{{time(BusinessStartDate) || '-'}}</td>
								<td colspan="1">{{LL('comp_to')[ZZ.KK]}}：</td>
								<td colspan="2">{{time(BusinessEndDate) || '-'}}</td>
							</tr>
							<tr>
								<td colspan="1">{{LL('comp_status')[ZZ.KK]}}：</td>
								<td colspan="2">{{Status || '-'}}</td>
								<td colspan="1">{{LL('comp_l')[ZZ.KK]}}：</td>
								<td colspan="2">{{Address || '-'}}</td>
							</tr>
							<tr>
								<td colspan="1">{{LL('comp_range')[ZZ.KK]}}：</td>
								<td colspan="5">{{BusinessScope || '-'}}</td>
							</tr>
							<tr>
								<td colspan="6" class="bg-e">{{LL('risk_info')[ZZ.KK]}}</td>
							</tr>
							<tr>
								<td>{{LL('comp_bad')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ BusinessInfo || '-'}}
								</td>

							</tr>
							<tr>
								<td>{{LL('comp_punish')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ AdministrativePenaltyInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_seal')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ SharePledgeInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_diya')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ MovablesPledgeInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_qian')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ TaxOwingInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_sifa')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ JudicialSaleInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_court')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ LawsuitInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_court_p')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CourtAnnouncementInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('court_notice')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ TrialInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('dis_exec')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CreditEnforcementInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('court_exec')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CourtEnforcementInfo || '-'}}
									<span v-if="HistoryId" @click="gotoDetail" class="first-detail">{{LL('detail')[ZZ.KK]}}</span>
								</td>
							</tr>
							<tr>
								<td>{{LL('serious_no')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CriminalInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_risk')[ZZ.KK]}}</td>
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
			<Footer></Footer>
		</el-container>

	</div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import ImgUpload from './ImgUpload'
import ImgList from './ImgList'

export default {
	components:{
		Header, ImgUpload, ImgList, Footer
	},
	name: 'FirstCheck',
	data () {
		return {
			ZZ:{},
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
			HistoryId: "",
	}
},
mounted () {
	this.ZZ = this.TT
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
			this.warn('请输入企业名称！','Please input company name')
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
					HistoryId,
				} = res.data || {}
				this.HistoryId = HistoryId
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
			if (a) {
				const time = new Date(a)
				const year = time.getFullYear()
				const month = time.getMonth() + 1
				const day = time.getDate()
				return year + '-' + month + '-' + day
			} else {
				return '-'
			}
			
		} else {
			return '-'
		}
		
	},

	// 去详情页面
	gotoDetail() {
		const hid = this.HistoryId
		const name = this.CompanyName
		let routeData = this.$router.resolve({
		   	name: "firstDetail",
		   	// query: params,
		   	params:{ name, hid }
		});
		window.open(routeData.href, '_blank')
	},

	// 处理企业名称清空的情况
	handleNameChange() {
		const {
			CompanyName,
		} = this
		if (CompanyName == '') {
			this.CorpCreditCode = ''
			this.CompanyLegalPerson = ''
			this.RegisterCapital = ''
			this.BusinessStartDate = ''
			this.BusinessEndDate = ''
			this.Status = ''
			this.Address = ''
			this.BusinessInfo = ''
			this.AdministrativePenaltyInfo = ''
			this.SharePledgeInfo = ''
			this.MovablesPledgeInfo = ''
			this.TaxOwingInfo = ''
			this.JudicialSaleInfo = ''
			this.LawsuitInfo = ''
			this.CourtAnnouncementInfo = ''
			this.TrialInfo = ''
			this.CreditEnforcementInfo = ''
			this.CourtEnforcementInfo = ''
			this.CriminalInfo = ''
			this.RiskInfo = ''
			this.BusinessScope = ''
		}
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
