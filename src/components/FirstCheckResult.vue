<template>
	<div class="first-check">
		<el-container class="c-outer">

			<Header back="true" :title="LL('person_check')[ZZ.KK]"></Header>

			<el-main class="c-main">
				<div class="sec">
					<p class="main-title"><span class="span-title">
						&nbsp;<span v-if="loading" class="loading"><i class="el-icon-loading"></i></span>
					</span></p>
					<table class="show-table" cellpadding="0" cellspacing="0" border="1">
						<tbody>
							<tr>
								<td colspan="2">
									<img class="header1" src="../../static/header1.png">
								</td>
								<td colspan="4">
									<span>{{LL('p_c_result')[ZZ.KK]}}</span>
								</td>
							</tr>
							<tr>
								<td colspan="7" class="bg-e">{{LL('person_info')[ZZ.KK]}}</td>
							</tr>
							<tr>
								<td colspan="1">{{LL('c_name')[ZZ.KK]}}：</td>
								<td colspan="1">{{BorrowerName || '-'}}</td>
								<td colspan="1">{{LL('c_id')[ZZ.KK]}}：</td>
								<td colspan="1">{{BorrowerIDNO || '-'}}</td>
								<td colspan="1">{{LL('c_tel')[ZZ.KK]}}：</td>
								<td colspan="1">{{BorrowerMobile || '-'}}</td>
							</tr>
							<tr>
								<td colspan="7" class="bg-e">{{LL('risk_info')[ZZ.KK]}}</td>
							</tr>
							<tr>
								<td>{{LL('court_case')[ZZ.KK]}}</td>
								<td colspan="5">{{BorrowerLawsuitInfo||'-'}}</td>
							</tr>
							<tr>
								<td>{{LL('court_exec')[ZZ.KK]}}</td>
								<td colspan="5">
									{{BorrowerEnforcementInfo||'-'}}
									<span v-if="BorrowerName" @click="gotoDetail" class="first-detail">{{LL('detail')[ZZ.KK]}}</span>
								</td>
							</tr>
							<tr>
								<td>{{LL('dis_exec')[ZZ.KK]}}</td>
								<td colspan="5">
									{{BorrowerCreditInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('network')[ZZ.KK]}}</td>
								<td colspan="5">
									{{BorrowerP2PBlacklistInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('tax_no')[ZZ.KK]}}</td>
								<td colspan="5">
									{{BorrowerTaxInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('serious_no')[ZZ.KK]}}</td>
								<td colspan="5">
									{{BorrowerCriminalInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('over_date')[ZZ.KK]}}</td>
								<td colspan="5">
									{{BorrowerLoanExpirationInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('muti_owe')[ZZ.KK]}}</td>
								<td colspan="5">
									{{BorrowerMultipointLendingInfo||'-'}}
								</td>
							</tr>
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
	name: 'FirstCheckResult',
	data () {
		return {
			ZZ:{},
			loading: false,
			formSize : 'small',

			// 初始化
			"BorrowerIDNO": "",
			"BorrowerMobile": "",
			"BorrowerName": "",

			SecurityInfo: "",
			BorrowerLawsuitInfo: "",
			BorrowerEnforcementInfo: "",
			BorrowerCreditInfo: "",
			BorrowerP2PBlacklistInfo: "",
			BorrowerTaxInfo: "",
			BorrowerCriminalInfo: "",
			BorrowerLoanExpirationInfo: "",
			BorrowerMultipointLendingInfo: "",

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
		this.pp('GetPersonAuditionHistoryById', param, res => {
			this.loading = false
			if (res.ret) {
				const {
					BorrowerName,
					BorrowerIDNO,
					BorrowerMobile,
					SecurityInfo,
					BorrowerLawsuitInfo,
					BorrowerEnforcementInfo,
					BorrowerCreditInfo,
					BorrowerP2PBlacklistInfo,
					BorrowerTaxInfo,
					BorrowerCriminalInfo,
					BorrowerLoanExpirationInfo,
					BorrowerMultipointLendingInfo,
				} = res.data || {}
				this.BorrowerName = BorrowerName
				this.BorrowerIDNO = BorrowerIDNO
				this.BorrowerMobile = BorrowerMobile
				this.SecurityInfo = SecurityInfo
				this.BorrowerLawsuitInfo = BorrowerLawsuitInfo
				this.BorrowerEnforcementInfo = BorrowerEnforcementInfo
				this.BorrowerCreditInfo = BorrowerCreditInfo
				this.BorrowerP2PBlacklistInfo = BorrowerP2PBlacklistInfo
				this.BorrowerTaxInfo = BorrowerTaxInfo
				this.BorrowerCriminalInfo = BorrowerCriminalInfo
				this.BorrowerLoanExpirationInfo = BorrowerLoanExpirationInfo
				this.BorrowerMultipointLendingInfo = BorrowerMultipointLendingInfo
			} else {
				this.warn(res.msg)
			}
		})
	},

	// 去详情页面
	gotoDetail() {
		const id = this.BorrowerIDNO
		const hid = this.$route.params.hid
		const name = this.BorrowerName
		let routeData = this.$router.resolve({
		   	name: "firstDetail",
		   	// query: params,
		   	params:{ name, hid, id }
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
