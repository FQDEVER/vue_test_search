<template>
	<div>
		<logoSelect @searchUrlStr="searchUrlBlock"></logoSelect>
		<div class="search-input">
			<input type="text" v-model="keyword">
			<span class="search-reset" @click="clickClear">&times;</span>
			<button class="search-btn" @click="clickSearchHandler">搜一下</button>
			<!-- 创建一个请求回来的显示框 -->
			<div class="search-select ">
				<ul>
					<li class="search-select-item" v-for="(item,index) in searchDataArr" @click="clickSearchItem(index)">
						{{item}}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import logoSelect from './logo-select'
	export default {
		components :{
			logoSelect
		},
		data:function(){
			return {
				message:'测试文本',
				searchDataArr:[],
				keyword:'',
				pushUrl:'https://sug.so.360.cn/suggest?word=',
			}
		},
		methods: {
			clickSearchHandler: function(){
				
				this.$http.jsonp(this.pushUrl + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
                	this.searchDataArr = res.data.s;
          	    });
			},
			clickClear:function(){
				this.searchDataArr = []
				this.keyword = ''
			},
			clickSearchItem:function(index){
				var url = this.pushUrl + this.searchDataArr[index];
				window.open(url);
			},
			searchUrlBlock:function(searchUrl){
				this.pushUrl = searchUrl;
			}
		}
	}

</script>

<style type="text/css">

.search-input{
	class:block;
	height:45px;
	width:600px;
	margin:0 auto;
	margin-top:10px;
	position:relative;
}

.search-input input {
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    width: 500px;
    height: 45px;
    font-size: 18px;
    float: left;
    padding-left: 10px;
    padding-right: 31px;
    overflow: scroll;
}

.search-input span{
	
	width: 21px;
    height: 21px;
    position: absolute;
    display: block;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    right: 110px;
    top: 12px

}


.search-input button{
	height: 45px;
    width: 100px;
    border: 1px solid mediumseagreen;
    background-color: mediumseagreen;
    color: white;
    font-size: 16px;
    font-weight: bold;
    float: left;
    // cursor: pointer;
}

.search-select ul{
	margin:0;
	text-align: left; 
	background-color:white;
	width:500px;
}

.search-select-item{
	margin:0px 10px;
}


</style>