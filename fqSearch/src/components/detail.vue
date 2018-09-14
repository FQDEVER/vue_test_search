<template>
	<div class="detailClass">
		<dynamicDetail></dynamicDetail>
		<praise></praise>
		<comment></comment>
		<bottomView></bottomView>
	</div>
</template>

<script type="text/javascript">
	import dynamicDetail from './dynamicDetail'
	import praise from './praise'
	import comment from './comment'
	import bottomView from './bottom'
	export default {
		components :{
			dynamicDetail,
			praise,
			comment,
			bottomView
		},
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
						}
					]
				}
			}
		},
		methods: {
			clickSearchHandler: function(){
				alert('响应');
				// this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
    //             	this.searchDataArr = res.data.s;
    //       	    });
          	    this.$http.jsonp('http://test.j-tour.cn/jtour-agw/V2.1.3B04//social/moments/info.mvc?mid=647&userId=127872976912781312')
          	    .then(function(res){
          	    	alert('成功'+res);
          	    })
          	    .catch(function(error){
          	    	alert('失败'+error);
          	    });
    			//请求详情数据
        //   	    this.$axios.post(
								// "http://test.j-tour.cn/jtour-agw/V2.1.3B04//social/moments/info.mvc",
								// this.$qs.stringify({
								// 	mid:"647",
								// 	userId:"127872976912781312"
								// })
								// )
        //   	    .then(response =>{
        //   	    	alert('请求成功');
        //   	    	console.log(response.data);
          	    	
        //   	    })
        //   	    .catch(error=>{
        //   	    	alert('请求失败');
        //   	    	console.log(error);
        //   	    });
        //   	    //请求的是点赞列表
        //   	    this.$axios.post(
								// "http://test.j-tour.cn/jtour-agw/V2.1.3B04//social/moments/praise/list.mvc",
								// this.$qs.stringify({
								// 	mid:"647",
								// 	userId:"127872976912781312",
								// 	loadId:"0"
								// })
								// )
        //   	    .then(response =>{
        //   	    	alert('点赞请求成功');
        //   	    	console.log(response.data);
          	    	
        //   	    })
        //   	    .catch(error=>{
        //   	    	alert('请求失败');
        //   	    	console.log(error);
        //   	    });
        //   	    //请求的是评论列表
        //   	    this.$axios.post(
								// "http://test.j-tour.cn/jtour-agw/V2.1.3B04//social/moments/praise/list.mvc",
								// this.$qs.stringify({
								// 	mid:"647",
								// 	userId:"127872976912781312",
								// 	loadId:"0"
								// })
								// )
        //   	    .then(response =>{
        //   	    	alert('点赞请求成功');
        //   	    	console.log(response.data);
          	    	
        //   	    })
        //   	    .catch(error=>{
        //   	    	alert('请求失败');
        //   	    	console.log(error);
        //   	    });
          	    
          	    
          	    
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
.detailClass{
	width:100%;
}

</style>