<template>
	<div class="valuation">
		<el-container class="c-outer">

			<Header back="true" :title="LL('valuation')[ZZ.KK]"></Header>

			<el-main class="c-main">
				
				<div class="sec">
					<p class="main-title"><span class="span-title">{{LL('input')[ZZ.KK]}}</span></p>
					<el-form :model="form1" :size="formSize" label-width="150px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="12">
								<el-form-item :label="LL('h_location')[ZZ.KK]" class="label-danger">
									<el-input v-model="form1.Location" :placeholder="LL('h_location')[ZZ.KK]"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item :label="LL('h_area')[ZZ.KK]" class="label-danger">
									<el-input type="number" @change="changeArea" v-model="form1.Area" :placeholder="LL('h_area')[ZZ.KK]"></el-input>
								</el-form-item>
							</el-col>

							

							

							<el-col :span="12">
								<el-form-item :label="LL('h_attr')[ZZ.KK]">
									<el-select class="w-100" v-model="form1.Type" :placeholder="LL('h_attr')[ZZ.KK]">
										<el-option v-for="(item,index) in op1" :key="index" :label="item" :value="item"></el-option>
									</el-select>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item :label="LL('h_use')[ZZ.KK]" class="label-danger">
									<el-select class="w-100" v-model="form1.Usage" @change="changeUsage" :placeholder="LL('h_use')[ZZ.KK]">
										<el-option v-for="(item,index) in op2" :key="index" :label="item" :value="item"></el-option>

									</el-select>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item :label="LL('h_build')[ZZ.KK]">
									<el-date-picker v-model="form1.BuildingFinishYear" value-format="yyyy" class="w-100" type="year" :placeholder="LL('h_build')[ZZ.KK]"></el-date-picker>
									<!-- <el-input v-model="form1.BuildingFinishYear" placeholder="请输入房龄"></el-input> -->
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item :label="LL('h_sou')[ZZ.KK]">
									<el-select class="w-100" v-model="form1.Orientation" :placeholder="LL('h_sou')[ZZ.KK]">
										<el-option v-for="(item,index) in op4" :key="index" :label="item" :value="item"></el-option>

									</el-select>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item :label="LL('total_floor')[ZZ.KK]">
									<el-input type="number" v-model="form1.TotalFloor" :placeholder="LL('total_floor')[ZZ.KK]"></el-input>
								</el-form-item>
							</el-col>

							<el-col :span="12">
								<el-form-item :label="LL('h_floor')[ZZ.KK]">
									<el-input type="number" v-model="form1.Floor" :placeholder="LL('h_floor')[ZZ.KK]"></el-input>
								</el-form-item>
							</el-col>

							

							<el-col :span="24">

								<el-button class="pull-left" type="primary" @click="valuation">{{LL('valuation')[ZZ.KK]}}</el-button>
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
								<td colspan="4">{{form1.Location || '-'}}</td>
							</tr>							<tr>
								<td>{{LL('h_area')[ZZ.KK]}}</td>
								<td>{{form1.Area|| '-'}}</td>
								<td>{{LL('h_use')[ZZ.KK]}}</td>
								<td colspan="2">{{form1.Usage|| '-'}}</td>
							</tr>
							<tr>
								<td>{{LL('total_floor')[ZZ.KK]}}</td>
								<td>{{form1.TotalFloor|| '-'}}</td>
								<td>{{LL('h_floor')[ZZ.KK]}}</td>
								<td colspan="2">{{form1.Floor|| '-'}}</td>
							</tr>
							<tr>
								<td>{{LL('h_sou')[ZZ.KK]}}</td>
								<td>{{form1.Orientation|| '-'}}</td>
								<td>{{LL('build_year')[ZZ.KK]}}</td>
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
	name: 'Valuation',
	computed:{
		BuildingYear: function(){
			const start = this.form1.BuildingFinishYear
			const end = new Date().getFullYear()
			if (start) {
				return +end - (+start)
			} else {
				return 0
			}
		},
	},
	data () {
		return {
			ZZ: {},
			loading : false,
			formSize : 'small',
			form1 : {
				"OwnerName" : "",
				"Location" : "",
				"Usage" : "住宅",
				"Area" : "",
				"PledgePercentage" : "6.5",
				Orientation: "",
				TotalFloor: "",
				Floor: "",
				BuildingFinishYear: "",
				Type: '', // 房屋性质
			},
			// 房本照片
			HouseCertificateImageUrls:[],
			C_HouseCertificateImageUrls: [],
			// 上传报告
			HouseValuationImageUrl: [],
			C_HouseValuationImageUrl: [],

			op1 : ['商品房','经济适用房','央产房','已购公房','其它'],
			op2 : ['住宅','别墅','商业','公寓','办公'],
			op3 : ['4','4.5','5','5.5','6','6.5','7','7.5','8'],
			op4 : ['无','北','南','西','东','东北','西北','东南','西南'],

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

            temp: false, // 是否估值成功
            OrderNo: '', // 编号
		}
	},
	mounted () {
		this.ZZ = this.TT
	},
	methods:{

		// 修改用途
		changeUsage(e) {
			const { Usage } = this.form1
			if (Usage == '住宅') {
				this.form1.PledgePercentage = '6.5'
			} else {
				this.form1.PledgePercentage = '5'
			}
		},

		// 修改面积
		changeArea() {
			const { Area } = this.form1
			console.log(Area)
			if (Area < 0 ) {
				this.form1.Area = 0
			}
		},

		// 估值
		valuation () {
			const id = null
			const hid = null
			const {
				OwnerName,
				Location,
				Usage,
				Area,
				PledgePercentage,
				Type,
				Orientation,
				TotalFloor,
				Floor,
				BuildingFinishYear,
			} = this.form1

			if (Location && Area && Usage) {

			} else {
				this.warn('请完成标红的项目！','Please complete the red input box!')
				return
			}
			const param = {
				OwnerName,
				Location,
				Usage,
				Area,
				PledgePercentage,
				Type,
				Orientation,
				TotalFloor,
				Floor,
				BuildingFinishYear,
			}
			this.loading = true
			this.pp('HouseValuation', param, res => {
				this.loading = false
				if (res.ret) {
					const {
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
			            HouseUnitPrice,
					} = res.data || {}

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
					this.HouseTotalPrice = HouseTotalPrice
					this.HouseUnitPrice = HouseUnitPrice
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
