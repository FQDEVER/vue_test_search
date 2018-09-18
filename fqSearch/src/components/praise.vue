<template>
	<div v-show="isShowPraise" class="praiseClass">
		<div class="titleImgClass">
			<img src="../assets/ios_praise_icon.png">
			<span>{{praiseCount}}人点赞</span>
		</div>
		<!-- 创建一个请求回来的显示框 -->
		<div class="praiseContent">
			<ul class="praiseClassUl">
				<li class="praiseItem" v-for="(item,index) in praiseModel.data" @click="clickPraiseItem(index)">
					<img class="praiseitemImg" :src="item.userAvatar">
				</li>
			</ul>
		</div>
		<div class="dynamicBotViewPraiseLine"></div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props:['praiseModel'],
		data:function(){
			return {
				// isShowPraise:false,
			}
		},
		computed:{
			praiseCount:function(){
				return mineCount(this.praiseModel.data);
			},
			isShowPraise:function(){
				return mineCount(this.praiseModel.data) > 0 ? true : false;
			}
		},
		methods: {
			clickPraiseItem:function(index){
				// 跳转到下载App
				window.open("https://itunes.apple.com/cn/app/军拓运动/id1121521585?mt=8");
			},
		},
		// watch:{
		// 	praiseModel:{
		// 		handler(newValue,oldValue){
		// 			alert(newValue);
		// 			this.isShowPraise = mineCount(newValue.data) > 0 ? true : false;
		// 		},
		// 		deep:true
		// 	}
		// }
	}

	function mineCount(o){
		var t = typeof o;

		if(t == 'string'){
			return o.length;

		}else if(t == 'object'){

			var n = 0;

			for(var i in o){

				n++;

			}

			return n;
		}
			return false;

	}

</script>

<style type="text/css">

.praiseClass{
	background-color:white;
	width:100%;
	padding-top:10px;
	max-width:600px;
}

.titleImgClass{
	display:block;
	position:relative;
}

.titleImgClass img{
	width:12px;
	height:12px;
	top:3px;
	left:10px;
	position:absolute;
}

.titleImgClass span{
	position:relative;
	margin-left :12px;
}

.praiseContent{
	background-color:white;
}

.praiseClassUl{
	width:100%;
	height:30px;
	list-style-type:none;
	padding:0px;
	padding-left:20px;
	padding-right:20px;
	box-sizing: border-box;
	overflow: hidden;
}

.praiseItem{
	float:left;
	margin-left:2px;
	width:30px;
	height:30px;
}


.praiseitemImg{
	width:30px;
	height:30px;
	border-radius: 15px;
}

.dynamicBotViewPraiseLine{
	width:100%;
	height:1px;
	background-color:#EEEEEE;
}

</style>