<template>
	<div class="index">
		<el-container class="c-outer">
			
			<Header @query="changeType" back="true" :title="LL('query_record')[ZZ.KK]"></Header>

		  	<el-main class="c-main">
				<div class="table-outer">
<!-- 					<el-table
						:data="orderList"
						border
						height="'calc(100% - 80px)'"
						class="index-table"
						>
						<el-table-column
							prop="BorrowerName"
							
							width="200">
							<template slot="header" slot-scope="scope">
					        	<span>{{LL('query_r_id')[ZZ.KK]}}</span>
					      	</template>
					      	<template slot-scope="scope">
								<el-badge v-if="type==0 && scope.row.NeedToOperate" is-dot></el-badge>
								<span>{{scope.row.CreatorName}}</span>
							</template>
						</el-table-column>
						<el-table-column
							prop="BorrowerName"
							
							width="150">
							<template slot="header" slot-scope="scope">
					        	<span>{{LL('query_r_c')[ZZ.KK]}}</span>
					      	</template>
					      	<template slot-scope="scope">
								<el-badge v-if="type==0 && scope.row.NeedToOperate" is-dot></el-badge>
								<span>{{scope.row.CreatorName}}</span>
							</template>
						</el-table-column>
						<el-table-column
							prop="BorrowerName"
							
							>
							<template slot="header" slot-scope="scope">
					        	<span>{{LL('query_r_k')[ZZ.KK]}}</span>
					      	</template>
					      	<template slot-scope="scope">
								<el-badge v-if="type==0 && scope.row.NeedToOperate" is-dot></el-badge>
								<span>{{scope.row.CreatorName}}</span>
							</template>
						</el-table-column>
						<el-table-column
							prop="CreationDateTime"
							
							width="200">
							<template slot="header" slot-scope="scope">
					        	<span>{{LL('query_r_t')[ZZ.KK]}}</span>
					      	</template>
					      	<template slot-scope="scope">
								<el-badge v-if="type==0 && scope.row.NeedToOperate" is-dot></el-badge>
								<span>{{scope.row.CreatorName}}</span>
							</template>
						</el-table-column>					
					</el-table>
 -->				<div class="history-table">
 	<!-- 					<div class="h-table-header">
 							<table class="show-table" cellpadding="0" cellspacing="0" border="1">
	 							<col width="200" />
	 							<col width="150" />
	 							<col width="450" />
	 							<col width="200" />
	 							<thead>
		 							<th>{{LL('query_r_id')[ZZ.KK]}}</th>
		 							<th>{{LL('query_r_c')[ZZ.KK]}}</th>
		 							<th>{{LL('query_r_k')[ZZ.KK]}}</th>
		 							<th>{{LL('query_r_t')[ZZ.KK]}}</th>
		 						</thead>
	 						</table>	
 						</div> -->
 						<!-- <div class="h-table-body"> -->
 							<table class="show-table" cellpadding="0" cellspacing="0" border="1">
	 							<col width="200" />
	 							<col width="500" />
	 							<col width="200" />
	 							<thead>
		 							<th>{{LL('query_r_c')[ZZ.KK]}}</th>
		 							<th>{{LL('query_r_k')[ZZ.KK]}}</th>
		 							<th>{{LL('query_r_t')[ZZ.KK]}}</th>
		 						</thead>
		 						<tbody>
		 							
		 							<tr v-for="(order,index) in orderList" :key="index">
		 								<td>{{order.content}}</td>
		 								<td>{{order.keyword}}</td>
		 								<td>{{order.time}}</td>
		 							</tr>
		 						</tbody>
		 					</table>	
 						<!-- </div> -->
 					</div>
 					
					<div class="index-bottom">
						
						<!-- <el-button-group size="mini"> -->
						  	<el-button type="primary" :disabled="PageIndex == 1" size="mini" icon="el-icon-arrow-left" @click="prevPage">{{LL('prev')[ZZ.KK]}}</el-button>
						  	<span class="index-bottom-page">{{LL('di')[ZZ.KK]}} {{PageIndex}} {{LL('page')[ZZ.KK]}}</span>
						  	<el-button type="primary" size="mini" :disabled="nextBtnDisable" @click="nextPage">{{LL('next')[ZZ.KK]}}<i class="el-icon-arrow-right el-icon--right"></i></el-button>
						<!-- </el-button-group> -->
					</div>
					
				</div>
		  	</el-main>

		  	<Footer></Footer>
			
		</el-container>
		
		


	</div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

const PAGE_ROWS = 50 // 每页50条

export default {
	components:{
		Header, Footer,
	},
	name: 'History',
	data () {
		return {
			ZZ: {},
			orderList: [],
			PageIndex: 1, // 当前页码
		}
	},
	computed:{
		nextBtnDisable: function(){
			const len = this.orderList.length
			if (len < PAGE_ROWS) {
				return true
			} else {
				return false
			}
		},
	},
	mounted () {
		console.log('进入页面')
		this.ZZ = this.TT
		this.changeType()
	},
	methods:{
		// 请求数据
		changeType() {
			
			const PageIndex = this.PageIndex
			const PageRows = PAGE_ROWS
			const param = {
				PageIndex,
				PageRows,
			}
			const { type } = this.$route.params
			let url = ''
			if (type == 1) {
				url = 'GetHouseValuationHistory'
			} else if (type == 2) {
				url = 'GetPersonAuditionHistory'
			} else if (type == 3) {
				url = 'GetCompanyAuditionHistory'
			}
			this.pp(url, param, res => {
				// console.log(res)
				if (res.ret) {
					this.orderList = this.format(res.data)
				} else {
					this.warn(res.msg)
				}
			})
		},

		format(arr) {
			if (arr && arr.length) {
				const rArr = []
				const { type } = this.$route.params
				arr.map(item => {
					let content = ''
					let keyword = ''
					if (type == 1) {
						content = '房屋估值'
						keyword = '房屋坐落：' + (item.HouseLocation1 || '-') +
								  ';房屋面积：' + (item.HouseArea||'-') + '平米'
					} else if (type == 2) {
						content = '自然人风险'
						keyword = '姓名' + (item.BorrowerName || '-') +
								  ';用户手机号：' + (item.BorrowerMobile||'-') + 
								  ';身份证号：' + (item.BorrowerIDNO||'-')
					} else if (type == 3) {
						content = '企业风险'
						keyword = '企业名称：' + (item.CompanyName || '-')
					}
					rArr.push({
						content,
						keyword,
						time: item.OperationDateTime
					})
				})
				return rArr
			} else {
				return []
			}
		},

		// 上一页
		prevPage() {
			const num = this.PageIndex
			if (num > 1) {
				this.PageIndex = num - 1
			} else {
				this.PageIndex = 1
			}
			this.changeType()
		},

		// 下一页
		nextPage() {
			const num = this.PageIndex
			this.PageIndex = num + 1
			this.changeType()
		},
		

	},
}

</script>

<style scoped>
.index {
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	vertical-align: middle;
}
.table-outer {
	width: 900px;
	height: calc(100% - 50px);
	margin: 20px auto;
}
.index-table {
	height: 100%;
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	margin-top: 20px;
	text-align: left;
}
.index-bottom {
	width: 100%;
	margin: 10px auto;
	text-align: cneter;
}
.index-bottom-page {
	padding: 0px 10px;
}
.op-item {
	height: 60px;
	width: 500px;
	line-height: 60px;
	margin: 0 auto;
	margin-top: 20px;
	border-radius: 5px;
	position: relative;
    color: #67c23a;
    background: #f0f9eb;
	border: 1px solid #c2e7b0;
	padding: 0 15px;
	cursor: pointer;
}
.op-item-icon {
	font-size: 18px;
}


.history-table {
	height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

.history-table table{
	height: 100%;
}
.history-table table td {
	padding: 3px 5px;
}
.h-table-body {
	width:100%;
	height:300px;
	overflow-y:scroll;
}
.h-table-head table,.h-table-body table {
	width:100%;
}

</style>
