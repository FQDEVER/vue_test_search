<template>
	<div class="detailClass">
		<dynamicDetail :detailModel="requestData"></dynamicDetail>
		<praise :praiseModel="praise"></praise>
		<comment :commentModel="comment"></comment>
		<bottomView></bottomView>
	</div>
</template>

<script type="text/javascript">
	import dynamicDetail from './dynamicDetail'
	import praise from './praise'
	import comment from './comment'
	import bottomView from './bottom'
	export default {
		created(){
			
          	    this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8')
          	    .then(function(res){
          	    	// alert('成功'+res);
          	    	// this.pictures = this.requestData.pictures.split(',');
	          	    	this.requestData = {
						collection : 0,
						isPraise : 0,
						momentsActivity :
						{
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
						userAvatar : "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=4bc239aadda20cf45990f8df46094b0c/9d82d158ccbf6c81924a92c5b13eb13533fa4099.jpg",
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
						pictures : "https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=19f1a47c1d38534393cf8121a312b01f/e1fe9925bc315c6018733cff80b1cb134954773f.jpg,https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=4766f2309def76c6cfd2fd2bad17fdf6/9e3df8dcd100baa16faa67aa4a10b912c8fc2e18.jpg,https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=71bf512d8a44ebf87271623fe9f8d736/37d12f2eb9389b50551d887c8835e5dde7116e39.jpg,https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=3892481d2c3fb80e13d167d706d02ffb/4034970a304e251facb1a0d4aa86c9177f3e5353.jpg,https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=9db129d85c3d269731d30e5d65fbb24f/64380cd7912397dd9c198c165482b2b7d0a287bb.jpg,https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=5c5f5462a04bd1131bcdb1326aaea488/7af40ad162d9f2d3c3e694fea4ec8a136327cc28.jpg",
						userName : "测试1013",
						comment : 1,
						praise : 1,
						content : "将爹表示支持和鼓励！？你手机号多少……巨额的财产是什么事吗……🏠妮诗生物纤维眼膜都不要了……n",
						userId : "49260878788431872",
					},
					this.praise = {
						data:[
							{
								userId : "49260878788431872",
								status : 1,
								ctime : "2018-09-07 18:12:21",
								id : 514,
								mid : 647,
								mtime : "2018-09-07 18:12:21",
								userName : "测试1013",
								userAvatar : "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=109b2013d4f9d72a0864161de42b282a/4ec2d5628535e5ddedc6e1f37bc6a7efce1b6237.jpg",
							}
						]
					},
					this.comment = {
						data:[
							{
								isPraise : 0,
								mid : 647,
								userAvatar : "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=4c15db25bb003af352bada60052bc619/b58f8c5494eef01f40ef23e9edfe9925bc317d26.jpg",
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
          	    })
          	    .catch(function(error){
          	    	// alert('失败'+error);
          	    });
		},
		components :{
			dynamicDetail,
			praise,
			comment,
			bottomView
		},
		data:function(){
			return {
				requestData:{},
				praise:{},
				comment:{}
			}
		},
		methods: {
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