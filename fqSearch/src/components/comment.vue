<template>
	<div class="commentClass">
		<div class="titleImgClass">
			<img src="../assets/ios_comment_icon.png">
			<span>{{commentCount}}条评论</span>
		</div>
		<!-- 创建一个请求回来的显示框 -->
		<div class="commentContentClass">
			<ul class="commentContentUl">
				<li class="CommentContentItem" v-for="(item,index) in commentModel.data">
					<div class="commentItemContentClass" @click="clickCellItemBlock(item)">
						<div class="commentPraiseContentClass">
							<img class="commentAvatarClass"  :src="item.userAvatar">
							<div class="commentNameClass">
								<a class="commentNmaeItem">{{item.userName +" "+ item.ctime}}</a>
								<p class="commentTimeItem">{{item.comment}}</p>
							</div>
							<!-- @click.stop="clickCommentPraise(item.mid)" -->
							<div class="commentPraiseClass" >
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
		props:['commentModel'],
		data:function(){
			return {
				message:'测试文本',
				}
		},
		methods: {
			clickCellItemBlock:function(item){
				// 跳转到下载App
				window.open("https://itunes.apple.com/cn/app/军拓运动/id1121521585?mt=8");
			}
		},
		computed:{
			commentCount:function(){
				return mineCount(this.commentModel.data);
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