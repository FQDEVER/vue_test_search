<template>
	<div class="dynamic">
		<!-- 顶部 -->
		<div class="dynamicTop">
			<img class="userAvatarClass" @click="clickDynamicDetail" :src="detailModel.userAvatar">
			<div class="userNameClass">
				<span class="userNmaeItem">{{detailModel.userName}}</span>
				<span class="userNmaeItem">{{detailModel.ctime}}</span>
			</div>
			<button class="userTopFollowClass" @click="clickDynamicDetail" >关注</button>
		</div>
		<!-- 文本 -->
		<div class="dyanmicContent">
			{{detailModel.content}}
		</div>
		<!-- 图片组 "imgPictures.count > 0 ? true : false"-->
		<div v-show="pictruesCount" class="imgPicturesContentClass">
			<ul class="imgPicturesContentUlClass">
				<li @click="clickDynamicDetail" class="imgPicturesItemClass" v-for="(item,index) in imgPictures">
					<img :src="item">
				</li>
			</ul>
		</div>
		<!-- 添加轨迹分享部分 -->
		<div class="dynamicActivityClass" @click="clickDynamicDetail" v-show="isShowActivity">
			<img  :src="detailModel.momentsActivity.thumbnail">
			<div class="dynamicActivityData">
				<div class="dynamicActivityTop">
				
						<a class="dynamicActivityTopFirst">{{detailModel.momentsActivity.name}}</a>	
						<div class="dynamicActivityTopSecond">
							<img src="../assets/ios_dot_icon.png">
							<a >{{detailModel.momentsActivity.placemark}}</a>
						</div>
				</div>
				<div class="dynamicActivityBot">
					<div class="dynamicActivityBotFirst">
						<img src="../assets/ios_speed_icon.png">
						<span >{{detailModel.momentsActivity.distance}}m</span>
					</div>
					<div class="dynamicActivityBotSecond">
						<img src="../assets/ios_time_icon.png">
						<span>{{detailModel.momentsActivity.actTime}}</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 地址 -->
		<div class="dynamicLocation">
			<img src="../assets/ios_local_icon.png">
			<span>{{detailModel.locateAddr}}</span>
		</div>
		<div class="dynamicBotViewDetailLine"></div>
	</div>
</template>

<script type="text/javascript">
	
	export default {

		props:['detailModel'],
		data :function(){
			return{
			}
		},
		methods: {
			
			clickDynamicDetail:function(){
				//跳转到下载App
				window.open("https://itunes.apple.com/cn/app/军拓运动/id1121521585?mt=8");
			}
		},
		computed:{
			imgPictures:function(){
				var pictruesArr = this.detailModel.pictures.split(',');
				return pictruesArr;
			},
			isShowActivity:function(){
				var t = typeof  this.detailModel.momentsActivity;
				if ( t == 'string') {
					return false;
				}else if(t == 'object'){
					return true;
				}
				return false;
			},
			pictruesCount:function(){
				var isPictruesCount = mineCount(this.detailModel.pictures) > 0 ? true : false;
				return isPictruesCount;
			}

		}
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
.dynamic{
	height:100%;
	width:100%;
	background-color:white;
	max-width:600px;
}

.dynamicTop{
	display: block;
	position:relative;
	height:60px;
	width:100%;
	margin:0 auto;
	padding:10px 20px;
	  -webkit-box-sizing: border-box;
 -moz-box-sizing: border-box;
      box-sizing: border-box;
}

.userAvatarClass{
	width : 50px;
	height: 50px;
	float:left;
	display:block;
}

.userNameClass{
	display:block;
	position:absolute;
	left:75px;
	right:85px;
	height:50px;
}

.userNmaeItem{
	float:left;
	width:100%;
	height:50%;	
	padding:4px;
  -webkit-box-sizing: border-box;
 -moz-box-sizing: border-box;
      box-sizing: border-box;
}


.userTopFollowClass{
	width:60px;
	height:30px;
	float:right;
	background-color: #2196F3;
  	color: white;
  	margin-top:10px;
  	border-radius: 15px;
    border: none;
}


.dyanmicContent{
	color:black;
	padding:10px 20px 0px 20px;
}

// 图片组
.imgPicturesContentClass{
	width:100%;
	position:absolute;
	top:0px;
}

.imgPicturesContentUlClass{
	padding-top:0px;
	padding-right:20px;
	padding-left:20px;
}

.imgPicturesItemClass
{
	width:32%;
	height:0;
	padding-bottom: 32%;
	display:inline-block;
	margin: 2px;
}

.imgPicturesItemClass img{
	width:100%;
	height:100%;
	background-size:cover;
}

.dynamicActivityClass{
	background-color:#eeeeee;
	margin-left:20px;
	margin-right:20px;
	height:90px;
	position:relative;
	border-radius: 5px;

}

.dynamicActivityClass img{
	width:120px;
	height:90px;
	border-radius: 5px 0 0 5px;
	float:left;
}

.dynamicActivityData{
	position: relative;
	height:90px;
	margin-left:120px;
}

.dynamicActivityTop{
	display: block;
	position:absolute;
	right:0;
	top:0;
	left:0;
}

.dynamicActivityTopFirst{
	float:left;
	margin-left:20px;
	margin-top : 10px;
}
.after-dynamicActivityTopFirst {
  clear: left;
}

.dynamicActivityTopSecond{
	float:right;
	margin-right:20px;
	margin-top : 10px;
}
.after-dynamicActivityTopSecond {
  clear: right;
}

.dynamicActivityTopSecond img{
	width:11px;
	height:11px;
	padding-right:5px;
	margin-top:2px;
}


.dynamicActivityBot{
	display: block;
	position:absolute;
	left:0px;
	right:0px;
	bottom:0px;
}

.dynamicActivityBotFirst{
	
	float:left;
	margin-left:20px;
	margin-bottom : 10px;
}

.dynamicActivityBotFirst img{
	width:11px;
	height:11px;
	padding-right:5px;
	margin-top:1px;
}

.dynamicActivityBotSecond{
	float:right;
	margin-right:20px;
	margin-bottom : 10px;
}
.dynamicActivityBotSecond img{
	width:11px;
	height:11px;
	padding-right:5px; 
	margin-top:1px;
}

.dynamicLocation{
	font-size:12px;
	padding: 10px 20px 10px 20px;
}

.dynamicLocation img{
	width:11px;
	height:11px;
	padding-right:5px; 
	margin-top:1px;
}

.dynamicBotViewDetailLine{
	width:100%;
	height:1px;
	background-color:#EEEEEE;
}

</style>