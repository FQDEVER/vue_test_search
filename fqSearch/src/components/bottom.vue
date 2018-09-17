<template>
	<div class="bottomViewClass" @click="clickBottomViewBlock">
		<div class="topLineClass"></div>
		<img src="../assets/ios_logo_icon.png">
		<div class="titleContentClass">
			<span class="titleClass">JTOUR</span>
			<span>你的行程.我来记录!</span>
		</div>
		<button class="downloadClass">立即下载</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		data:function(){
			return {
				message:'测试文本',
			}
		},
		methods: {
			clickBottomViewBlock:function(item){
				// 跳转到下载App
				window.open("https://itunes.apple.com/cn/app/军拓运动/id1121521585?mt=8");
			}
		}
	}

</script>

<style type="text/css">

.bottomViewClass{
	background-color:white;
	display:block;
	position: fixed;
	bottom:0;
	width:100%;
	height:60px;
	max-width:600px;
}

.topLineClass{
	width:100%;
	height:1px;
	background-color:#EEEEEE;
}

.bottomViewClass img{
	float:left;
	margin-left:20px;
	margin-top:10px;
	width:40px;
	height:40px;
}

.titleContentClass{
	display:block;
	position:absolute;
	left:70px;
	height:40px;
	top:10px;
	right:100px;
}

.titleContentClass span{
	float:left;
	width:100%;
	height:50%;
}

.titleClass{
	font-size:1.4em;
}

.after-titleContentClass span{
	clear:left;
}

.downloadClass{
	float:right;
	margin-right:10px;
	width:80px;
	height:30px;
	background-color:#2196F3;
	border:none;
	border-radius: 15px;
	color:white;
	margin-top:15px;
}

</style>