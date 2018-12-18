<template>
	<div class="first-check">
		<el-container class="c-outer">

			<Header back="true" :title="LL('person_check')[ZZ.KK]"></Header>

			<el-main class="c-main">
				<div class="sec">
					<p class="main-title"><span class="span-title">{{LL('input')[ZZ.KK]}}</span></p>
					<el-form :size="formSize" label-width="170px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="15">
								<el-form-item :label="LL('c_name')[ZZ.KK]" class="label-danger">
									<el-input v-model="BorrowerName" :placeholder="LL('c_name')[ZZ.KK]"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="15">
								<el-form-item :label="LL('c_id')[ZZ.KK]" class="label-danger">
									<el-input v-model="BorrowerIDNO" :placeholder="LL('c_id')[ZZ.KK]"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="15">
								<el-form-item :label="LL('c_tel')[ZZ.KK]" class="label-danger">
									<el-input v-model="BorrowerMobile" :placeholder="LL('c_tel')[ZZ.KK]"></el-input>
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
					<!-- <p class="main-title"><span class="span-title">表格</span></p> -->
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
								<td colspan="5">{{LawsuitInfo||'-'}}</td>
							</tr>
							<tr>
								<td>{{LL('court_exec')[ZZ.KK]}}</td>
								<td colspan="5">
									{{EnforcementInfo||'-'}}
									<span v-if="HistoryId" @click="gotoDetail" class="first-detail">{{LL('detail')[ZZ.KK]}}</span>
								</td>
							</tr>
							<tr>
								<td>{{LL('dis_exec')[ZZ.KK]}}</td>
								<td colspan="5">
									{{CreditInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('network')[ZZ.KK]}}</td>
								<td colspan="5">
									{{P2PBlacklistInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('tax_no')[ZZ.KK]}}</td>
								<td colspan="5">
									{{TaxInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('serious_no')[ZZ.KK]}}</td>
								<td colspan="5">
									{{CriminalInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('over_date')[ZZ.KK]}}</td>
								<td colspan="5">
									{{LoanExpirationInfo||'-'}}
								</td>
							</tr>
							<tr>
								<td>{{LL('muti_owe')[ZZ.KK]}}</td>
								<td colspan="5">
									{{MultipointLendingInfo||'-'}}
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
			LawsuitInfo: "",
			EnforcementInfo: "",
			CreditInfo: "",
			P2PBlacklistInfo: "",
			TaxInfo: "",
			CriminalInfo: "",
			LoanExpirationInfo: "",
			MultipointLendingInfo: "",
			HistoryId: '',

	}
},
mounted () {
	this.ZZ = this.TT
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
			this.warn('请完成标红的项目！','Please complete the red input box!')
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
					HistoryId,
				} = res.data || {}
				this.HistoryId = HistoryId
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
	gotoDetail() {
		const id = this.BorrowerIDNO
		const hid = this.HistoryId
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
