<template>
	<div class="commentClass">
		<div class="titleImgClass">
			<img src="../assets/ios_comment_icon.png">
			<span>{{comment.data.count}}6条评论</span>
		</div>
		<!-- 创建一个请求回来的显示框 -->
		<div class="commentContentClass">
			<ul class="commentContentUl">
				<li class="CommentContentItem" v-for="(item,index) in comment.data">
					<div class="commentItemContentClass" @click="clickCellItemBlock(item)">
						<div class="commentPraiseContentClass">
							<img class="commentAvatarClass"  src="http://img-user.j-tour.cn/49260878788431872_head">
							<div class="commentNameClass">
								<a class="commentNmaeItem">{{item.userName +" "+ item.ctime}}</a>
								<p class="commentTimeItem">{{item.comment}}</p>
							</div>
							<div @click.stop="clickCommentPraise(item.mid)" class="commentPraiseClass" >
								<img src ="../assets/ios_praise_icon.png">
								<span>{{item.praise}}</span>
							</div>
						</div>
						<div class="dynamicBotView"></div>
					</div>
				</li>
			</ul>
		</div>
		<div class="dynamicMarginClass"></div>
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
						},
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
						},
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
						},
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
						},
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
						},
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
						},
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
						},
						{
							isPraise : 0,
							mid : 647,
							userAvatar : "http://img-user.j-tour.cn/127872976912781312_head",
							replyUserAvatar : "",
							cid : 595,
							comment : "责令见识到了房间爱上了房间大拉萨解放路多少距离飞机撒了房间大撒了房间里的是否连接",
							userId : "127872976912781312",
							userName : "Dakedake",
							replyUserId : "",
							praise : 0,
							replyUserName : "",
							ctime : "2018-09-10 10:09:29",
							mtime : "2018-09-10 10:09:29",
							status : 1,
						},
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
			clickSearchHandler: function(){
				alert('响应');
			},
			clickCommentPraise:function(commentId){
				// 跳转到下载App
				alert(commentId);
			},
			clickCellItemBlock:function(item){
				// 跳转到下载App
				alert(item.comment);
			}
		}

	}

</script>

<style type="text/css">

.commentClass{
	background-color:white;
	width:100%;
	display:block;
	position: relative;
	padding-top:10px;
	max-width:600px;
}

.titleImgClass{
	// background-color:blue;
	display:block;
	position:relative;
	margin-left:10px;
}

.titleImgClass img{
	width:12px;
	height:12px;
	top:3px;
	position:absolute;
}

.titleImgClass span{
	position:relative;
	left : 17px;
}

.commentContentClass{
	background-color:white;
	width:100%;
	overflow:hidden;
	clear:both;
}

.commentContentUl{
	background-color:width;
	width:100%;
	height:60px;
	list-style-type:none;
	margin:0px auto;
	padding:0px;

}

.CommentContentItem{
	float:left;
	margin-top:10px;
	width:100%;
	// background-color:blue;
}

.commentItemContentClass{
	display: block;
	position:relative;
	width:100%;
}

.commentItemContent{
	float:left;
	width:100%;
	padding:10px;
	// background-color:red;
}

.after-commentItemContent{
	clear:left;
}

.commentAvatarClass{
	width : 40px;
	height: 40px;
	margin-left:20px;
	float:left;
}

.after-commentAvatarClass{
	clear:left;
}

.commentNameClass{
	margin-left:70px;
	margin-right:60px;
}

.commentNmaeItem{
	// width:205px;
	height:30px;	
	margin-top:15px;
	font-size:12px;
}

.commentTimeItem{
	margin-top:5px;;
}

.commentPraiseClass{
    display:block;
    position:absolute;
    font-size: 13px;
    width:40px;
    height:30px;
    right:10px;
 	top:0px;
}


.commentPraiseClass img{
	position:absolute;
	width:11px;
	height:11px;
	top:11px;
}

.commentPraiseClass span{
	position:absolute;
	margin-left:16px;
	top:10px;
	font-size:10px;
}

.dynamicBotView{
	width:100%;
	height:1px;
	float:left;
	background-color:#EEEEEE;
}

.dynamicMarginClass{
	width:100%;
	height:60px;
}

</style>