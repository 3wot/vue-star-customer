<template>
	

	<el-footer class="c-footer">
		<span class="lan" v-bind:class="{'select-lan': temp == 'z'}" @click="changeLan('z')">中文</span>
		<span class="lan" v-bind:class="{'select-lan': temp == 'e'}" @click="changeLan('e')">English {{TT.KK}}</span>
	</el-footer>
		
	
</template>

<script>

export default {
	components:{
		
	},
	name: 'Footer',

	data () {
		return {
			temp: ''
		}
	},
	mounted () {
		this.temp = this.TT.KK
	},
	methods:{

		changeLan(temp) {
			this.TT.KK = temp
			this.temp = temp
		}
	
	},


}
</script>

<style scoped>

.c-footer {
	position: absolute;
	bottom: 0px;
	height: 60px;
	left: 0px;
	right: 0px;
	line-height: 60px;
	text-align: cneter;
}
.lan {
	padding: 0px 15px;
	cursor: pointer;
}
.lan:hover {
	color: #409eff;
}
.select-lan {
	color: #409eff;
}


</style>
