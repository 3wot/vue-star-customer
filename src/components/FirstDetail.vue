<template>
	<div class="print-deal">
		<el-container class="c-outer">

			<Header back="true" :title="LL('detail')[ZZ.KK]"></Header>
			<Footer></Footer>

			<el-main class="c-main">
				
				<div class="sec">
					<el-form class="m-t-20" label-width="50px" label-position="left">
						<el-row :gutter="15">

							<el-col :span="24">
								<el-form-item label=" ">
									<table class="show-table" cellpadding="0" cellspacing="0" border="1">
										<thead>
											<th width="100">{{LL('case_num')[ZZ.KK]}}</th>
											<th width="100">{{LL('case_status')[ZZ.KK]}}</th>
											<th width="100">{{LL('court_name')[ZZ.KK]}}</th>
											<th width="100">{{LL('entity_num')[ZZ.KK]}}</th>
											<th width="100">{{LL('entity_name')[ZZ.KK]}}</th>
											<th width="100">{{LL('exec_money')[ZZ.KK]}}</th>
											<th width="100">{{LL('date')[ZZ.KK]}}</th>
										</thead>
										<tbody v-if="data.length">
											<tr v-for="(dd,index) in data" :key="index">
												<td>{{dd.caseCode}}</td>
												<td>{{dd.caseState}}</td>
												<td>{{dd.courtName}}</td>
												<td>{{dd.entityId}}</td>
												<td>{{dd.entityName}}</td>
												<td>{{dd.execMoney}}</td>
												<td>{{dd.regDate}}</td>
											</tr>
										</tbody>
										<tbody v-if="!data.length">
											<tr>
												<td colspan="7">暂无数据</td>
											</tr>
										</tbody>
									</table>
								</el-form-item>
							</el-col>

						</el-row>
					</el-form>
				</div>

				

			</el-main>
		</el-container>

	</div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
	components:{
		Header, Footer,
	},
	name: 'FirstDetail',
	data () {
		return {
			ZZ: {},
			data: []
		}
	},
	mounted () {
		// console.log(this.$route.params.id)
		this.ZZ = this.TT
		this.init()
	},
	methods:{

		// 初始化
		init() {
			const { hid, name } = this.$route.params
			const id = this.$route.params.id
			const orderId = null
			const param = {
				historyId: hid,
				name,
				// orderId,
			}
			if (id) {
				param.idNo = id
			} else {
				param.idNo = null
			}
			this.pp('GetEnforcementInfoDetail3', param, res => {
				if (res.ret) {
					this.data = this.format(res.data)
				} else {
					this.warn(res.msg)
				}
			})

		},

		format(arr) {
			if (arr && arr.length) {
				const rData = []
				arr.map(item => {
					const a = JSON.parse(item.detailContent)
					rData.push(a.data)
				})
				return rData
			} else {
				return []
			}
		}

	},


}
</script>

<style scoped>
.print-deal {
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
	width : 130px;


}

</style>
