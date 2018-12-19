<template>
	<div class="first-check">
		<el-container class="c-outer">

			<Header back="true" :title="LL('comp_check')[ZZ.KK]"></Header>
			
			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">&nbsp;<span v-if="loading" class="loading"><i class="el-icon-loading"></i></span></span></p>
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
								<td colspan="2">{{CompanySecurityIDNO|| '-'}}</td>
							</tr>
							<tr>
								<td colspan="1">{{LL('comp_person')[ZZ.KK]}}：</td>
								<td colspan="2">{{CompanyLegalPersonName || '-'}}</td>
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
								<td colspan="5">{{CorpBusinessScope || '-'}}</td>
							</tr>
							<tr>
								<td colspan="6" class="bg-e">{{LL('risk_info')[ZZ.KK]}}</td>
							</tr>
							<tr>
								<td>{{LL('comp_bad')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpBusinessInfo || '-'}}
								</td>

							</tr>
							<tr>
								<td>{{LL('comp_punish')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpAdministrativePenaltyInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_seal')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpSharePledgeInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_diya')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpMovablesPledgeInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_qian')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpTaxOwingInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_sifa')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpJudicialSaleInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_court')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpLawsuitInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_court_p')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpCourtAnnouncementInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('court_notice')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpTrialInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('dis_exec')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpCreditEnforcementInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('court_exec')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpCourtEnforcementInfo || '-'}}
									<span v-if="CompanyName" @click="gotoDetail" class="first-detail">{{LL('detail')[ZZ.KK]}}</span>
								</td>
							</tr>
							<tr>
								<td>{{LL('serious_no')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpCriminalInfo || '-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('comp_risk')[ZZ.KK]}}</td>
								<td colspan="5">
									{{ CorpRiskInfo || '-'}}
								</td>
							</tr>
		<!-- 					<tr>
								<td>经营范围</td>
								<td colspan="5">
									{{ CorpBusinessScope || '-'}}
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
	name: 'FirCheckResult',
	data () {
		return {
			ZZ:{},
			loading: false,
			
			CompanyName: '',
			
			CompanySecurityIDNO: '',
			CompanyLegalPersonName: '',
			RegisterCapital: '',
			BusinessStartDate: '',
			BusinessEndDate: '',
			Status: '',
			Address: '',
			CorpBusinessInfo: '',
			CorpAdministrativePenaltyInfo: '',
			CorpSharePledgeInfo: '',
			CorpMovablesPledgeInfo: '',
			CorpTaxOwingInfo: '',
			CorpJudicialSaleInfo: '',
			CorpLawsuitInfo: '',
			CorpCourtAnnouncementInfo: '',
			CorpTrialInfo: '',
			CorpCreditEnforcementInfo: '',
			CorpCourtEnforcementInfo: '',
			CorpCriminalInfo: '',
			CorpRiskInfo: '',
			CorpBusinessScope: '',
			HistoryId: "",
	}
},
mounted () {
	this.ZZ = this.TT
	this.firstCheck()
},
methods:{

	// 初审
	firstCheck () {
		const historyId = this.$route.params.hid
		const param = {
			historyId,
		}
		this.loading = true
		this.pp('GetCompanyAuditionHistoryById', param, res => {
			this.loading = false
			if (res.ret) {
				const {
					CompanyName,
					CompanySecurityIDNO,
					CompanyLegalPersonName,
					RegisterCapital,
					BusinessStartDate,
					BusinessEndDate,
					Status,
					Address,
					CorpBusinessInfo,
					CorpAdministrativePenaltyInfo,
					CorpSharePledgeInfo,
					CorpMovablesPledgeInfo,
					CorpTaxOwingInfo,
					CorpJudicialSaleInfo,
					CorpLawsuitInfo,
					CorpCourtAnnouncementInfo,
					CorpTrialInfo,
					CorpCreditEnforcementInfo,
					CorpCourtEnforcementInfo,
					CorpCriminalInfo,
					CorpRiskInfo,
					CorpBusinessScope,
				} = res.data || {}
				this.CompanyName = CompanyName
				this.CompanySecurityIDNO = CompanySecurityIDNO
				this.CompanyLegalPersonName = CompanyLegalPersonName
				this.RegisterCapital = RegisterCapital
				this.BusinessStartDate = BusinessStartDate
				this.BusinessEndDate = BusinessEndDate
				this.Status = Status
				this.Address = Address
				this.CorpBusinessInfo = CorpBusinessInfo
				this.CorpAdministrativePenaltyInfo = CorpAdministrativePenaltyInfo
				this.CorpSharePledgeInfo = CorpSharePledgeInfo
				this.CorpMovablesPledgeInfo = CorpMovablesPledgeInfo
				this.CorpTaxOwingInfo = CorpTaxOwingInfo
				this.CorpJudicialSaleInfo = CorpJudicialSaleInfo
				this.CorpLawsuitInfo = CorpLawsuitInfo
				this.CorpCourtAnnouncementInfo = CorpCourtAnnouncementInfo
				this.CorpTrialInfo = CorpTrialInfo
				this.CorpCreditEnforcementInfo = CorpCreditEnforcementInfo
				this.CorpCourtEnforcementInfo = CorpCourtEnforcementInfo
				this.CorpCriminalInfo = CorpCriminalInfo
				this.CorpRiskInfo = CorpRiskInfo
				this.CorpBusinessScope = CorpBusinessScope
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
		const hid = this.$route.params.hid
		const name = this.CompanyName
		let routeData = this.$router.resolve({
		   	name: "firstDetail",
		   	// query: params,
		   	params:{ name, hid }
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
