<template>
	<div class="dynamic" @click="clickDynamicDetail">
		<!-- 顶部 -->
		<div class="dynamicTop">
			<img class="userAvatarClass"  src="http://img-user.j-tour.cn/49260878788431872_head">
			<div class="userNameClass">
				<span class="userNmaeItem">{{requestData.userName}}</span>
				<span class="userNmaeItem">{{requestData.ctime}}</span>
			</div>
			<button class="userTopFollowClass" @click="clickSearchHandler" >关注</button>
		</div>
		<!-- 文本 -->
		<div class="dyanmicContent">
			{{requestData.content}}
		</div>
		<!-- 图片组 "imgPictures.count > 0 ? true : false"-->
		<div class="imgPicturesContentClass">
			<ul class="imgPicturesContentUlClass">
				<li class="imgPicturesItemClass" v-for="(item,index) in imgPictures">
					<img src="http://img-user.j-tour.cn/49260878788431872_head">
				</li>
			</ul>
		</div>
		<!-- 添加轨迹分享部分 -->
		<div class="dynamicActivityClass">
			<img  src="http://img-track.j-tour.cn/Fv6bHBr7d6_Yni70SQXZv3EyI2aG">
			<div class="dynamicActivityData">
				<div class="dynamicActivityTop">
				
						<a class="dynamicActivityTopFirst">{{requestData.momentsActivity.name}}</a>	
						<div class="dynamicActivityTopSecond">
							<img src="../assets/ios_dot_icon.png">
							<a >{{requestData.momentsActivity.placemark}}</a>
						</div>
				</div>
				<div class="dynamicActivityBot">
					<div class="dynamicActivityBotFirst">
						<img src="../assets/ios_speed_icon.png">
						<span >{{requestData.momentsActivity.distance}}m</span>
					</div>
					<div class="dynamicActivityBotSecond">
						<img src="../assets/ios_time_icon.png">
						<span>{{requestData.momentsActivity.actTime}}</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 地址 -->
		<div class="dynamicLocation">
			<img src="../assets/ios_local_icon.png">
			<span>{{requestData.locateAddr}}</span>
		</div>
		<div class="dynamicBotViewDetailLine"></div>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		data:function(){
			return {
				message:'测试文本',
				searchDataArr:[],
				keyword:'',
				pushUrl:'',
				imgPictures:[
					"http://img-user.j-tour.cn/49260878788431872_head",
					"http://img-user.j-tour.cn/49260878788431872_head",
					"http://img-user.j-tour.cn/49260878788431872_head",
					"http://img-user.j-tour.cn/49260878788431872_head",
				],
				requestData:{
					collection : 0,
					isPraise : 0,
					momentsActivity : 	{
						speed : 0,
						mid : 647,
						placemark : 4,
						setType : 6,
						type : 1,
						refid : 319,
						actTime : 675,
						ctime : "",
						mtime : "",
						thumbnail : "http://img-track.j-tour.cn/Fv6bHBr7d6_Yni70SQXZv3EyI2aG",
						distance : 42607,
						name : "哦问你",
					},
					status : 1,
					userAvatar : "http://img-user.j-tour.cn/49260878788431872_head",
					isFollow : 1,
					mid : 647,
					ctime : "2018-09-07 18:11:49",
					belongsType : 0,
					mtime : "2018-09-10 10:09:29",
					isCollect : 0,
					locateAddr : "广东省深圳市南山区",
					type : 1,
					belongsName : "",
					belongsId : "",
					pictures : "",
					userName : "测试1013",
					comment : 1,
					praise : 1,
					content : "将爹表示支持和鼓励！？你手机号多少……巨额的财产是什么事吗……🏠妮诗生物纤维眼膜都不要了……n",
					userId : "49260878788431872",
				},
				praise:{
					data:[
						{
							userId : "49260878788431872",
							status : 1,
							ctime : "2018-09-07 18:12:21",
							id : 514,
							mid : 647,
							mtime : "2018-09-07 18:12:21",
							userName : "测试1013",
							userAvatar : "http://img-user.j-tour.cn/49260878788431872_head",
						}
					]
				},
				comment:{
					data:[
						{
							isPraise : 0,
							mid : 647,
							userAvatar : "http://img-user.j-tour.cn/127872976912781312_head",
							replyUserAvatar : "",
							cid : 595,
							comment : "Cghhhh ",
							userId : "127872976912781312",
							userName : "Dakedake",
							replyUserId : "",
							praise : 0,
							replyUserName : "",
							ctime : "2018-09-10 10:09:29",
							mtime : "2018-09-10 10:09:29",
							status : 1,
						}
					]
				}
			}
		},
		methods: {
			
			clickDynamicDetail:function(){
				//跳转到下载App
				alert('跳转到下载App');
			},
		}
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
	height:width;
	display:inline-block;
	margin: 2px;
}

.imgPicturesItemClass img{
	width:100%;
	height:100%;
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