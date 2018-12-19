<template>
	<div class="valuation">
		<el-container class="c-outer">

			<Header back="true" :title="LL('valuation')[ZZ.KK]"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">&nbsp;<span v-if="loading" class="loading"><i class="el-icon-loading"></i></span></span></p>
					<table class="show-table" cellpadding="0" cellspacing="0" border="1">
						<tbody>
							<tr>
								<td colspan="2">
									<img class="header1" src="../../static/header1.png">
								</td>
								<td colspan="3">
									<span>{{LL('h_valuate_r')[ZZ.KK]}}</span>
								</td>
								
							</tr>
<!-- 							<tr>
								<td>编号</td>
								<td colspan="4">{{OrderNo || '-'}}</td>
							</tr> -->
							<tr>
								<td>{{LL('h_location')[ZZ.KK]}}</td>
								<td colspan="4">{{ HouseLocation1 || '-'}}</td>
							</tr>							<tr>
								<td>{{LL('h_area')[ZZ.KK]}}</td>
								<td>{{ HouseArea|| '-'}}</td>
								<td>{{LL('h_use')[ZZ.KK]}}</td>
								<td colspan="2">{{HouseUsage|| '-'}}</td>
							</tr>
							<tr>
								<td>{{LL('total_floor')[ZZ.KK]}}</td>
								<td>{{HouseTotalFloor|| '-'}}</td>
								<td>{{LL('h_floor')[ZZ.KK]}}</td>
								<td colspan="2">{{HouseFloor|| '-'}}</td>
							</tr>
							<tr>
								<td>{{LL('h_sou')[ZZ.KK]}}</td>
								<td>{{HouseOrientation|| '-'}}</td>
								<td>{{LL('build_year')[ZZ.KK]}}</td>
								<!-- <td colspan="2">{{BuildingFinishYear|| '-'}}</td> -->
								<td colspan="2" :class="{'td-danger': BuildingYear>=35}">{{BuildingYear|| '-'}}</td>
							</tr>
							<tr>
								<td>{{LL('h_s_price')[ZZ.KK]}}</td>
								<td>{{HouseUnitPrice|| '-'}}</td>
								<td>{{LL('h_t_price')[ZZ.KK]}}</td>
								<td colspan="2">{{HouseTotalPrice|| '-'}}</td>
							</tr>
							<tr>
								<td>{{LL('normal_price')[ZZ.KK]}}</td>
								<td>{{HouseAveragePrice|| '-'}}</td>
								<td>{{LL('deal_cycle')[ZZ.KK]}}</td>
								<td colspan="2">{{HouseDealPeriod|| '-'}}</td>
							</tr>
							<tr>
								<td rowspan="2">{{LL('near_price')[ZZ.KK]}}</td>
								<td>{{HouseNearbyName1|| '-'}}</td>
								<td>{{HouseNearbyAveragePrice1|| '-'}}</td>
								<td>{{HouseNearbyName2|| '-'}}</td>
								<td>{{HouseNearbyAveragePrice2|| '-'}}</td>
							</tr>
							<tr>
								<td>{{HouseNearbyName3|| '-'}}</td>
								<td>{{HouseNearbyAveragePrice3|| '-'}}</td>
								<td>{{HouseNearbyName4|| '-'}}</td>
								<td>{{HouseNearbyAveragePrice4|| '-'}}</td>
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
		Header, ImgUpload, ImgList, Footer,
	},
	name: 'ValuationResult',
	data () {
		return {
			ZZ: {},
			loading : false,
			
			HouseLocation1: '',
			HouseArea: '',
			HouseUsage: '',
			HouseFloor: '',
			HouseTotalFloor: '',
			HouseOrientation: '',
			HouseUnitPrice: '',
			BuildingFinishYear:'',
			//估值返回字段
		 	"HouseAveragePrice": "",
            "HouseDealPeriod": "",
            "HouseNearbyName1": '',
            "HouseNearbyName2": '',
            "HouseNearbyName3": '',
            "HouseNearbyName4": '',
            "HouseNearbyAveragePrice1": "",
            "HouseNearbyAveragePrice2": "",
            "HouseNearbyAveragePrice3": "",
            "HouseNearbyAveragePrice4": "",
            "HousePledgePrice": "",
            "HouseTotalPrice": "",
            "HouseUnitPrice": "",

		}
	},
	computed:{
		BuildingYear: function(){
			const start = this.BuildingFinishYear
			const end = new Date().getFullYear()
			if (start) {
				return +end - (+start)
			} else {
				return 0
			}
		},
	},
	mounted () {
		this.ZZ = this.TT
		this.valuation()
	},
	methods:{

		// 估值
		valuation () {
			const historyId = this.$route.params.hid
			const param = {
				historyId,
			}
			this.loading = true
			this.pp('GetHouseValuationHistoryById', param, res => {
				this.loading = false
				if (res.ret) {
					const {
						HouseLocation1,
						HouseArea,
						HouseUsage,
						HouseFloor,
						HouseTotalFloor,
						HouseOrientation,
						HouseUnitPrice,
						HouseAveragePrice,
			            HouseDealPeriod,
			            HouseNearbyName1,
			            HouseNearbyName2,
			            HouseNearbyName3,
			            HouseNearbyName4,
			            HouseNearbyAveragePrice1,
			            HouseNearbyAveragePrice2,
			            HouseNearbyAveragePrice3,
			            HouseNearbyAveragePrice4,
			            HousePledgePrice,
			            HouseTotalPrice,
			            BuildingFinishYear,
					} = res.data || {}
					this.BuildingFinishYear = BuildingFinishYear
					this.HouseLocation1 = HouseLocation1
					this.HouseArea = HouseArea
					this.HouseUsage = HouseUsage
					this.HouseFloor = HouseFloor
					this.HouseTotalFloor = HouseTotalFloor
					this.HouseOrientation = HouseOrientation
					this.HouseUnitPrice = HouseUnitPrice

					this.HouseAveragePrice = HouseAveragePrice
					this.HouseDealPeriod = HouseDealPeriod
					this.HouseNearbyName1 = HouseNearbyName1
					this.HouseNearbyName2 = HouseNearbyName2
					this.HouseNearbyName3 = HouseNearbyName3
					this.HouseNearbyName4 = HouseNearbyName4
					this.HouseNearbyAveragePrice1 = HouseNearbyAveragePrice1
					this.HouseNearbyAveragePrice2 = HouseNearbyAveragePrice2
					this.HouseNearbyAveragePrice3 = HouseNearbyAveragePrice3
					this.HouseNearbyAveragePrice4 = HouseNearbyAveragePrice4
					this.HousePledgePrice = HousePledgePrice
					this.HouseTotalPrice = parseFloat(HouseTotalPrice/10000)
					
				} else {
					this.warn(res.msg)
				}
			})

		},

	},
}
</script>

<style scoped>
.valuation {
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
	max-width: 150px;
	min-width: 120px;
}
.td-danger {
	background-color: red;
	color: #ffffff;
}


</style>
