<template>
	<div class="main-logo">
		<img :src="logoData[selectNow].imgSrc">
		<span class="logoList-arrow" @click="clickChangSearch"></span>  
		<ul v-show='showSearchSelectView' class="logoList">
			<li v-for="(item,index) in logoData" @click="clickItemBlock(index)" >
				<img :src="item.imgSrc">
			</li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		data : function(){
			return {
				selectNow:0,
				logoData:[
				{
					imgSrc : require('../assets/360_logo.png')
				},
				{
					imgSrc:require('../assets/baidu_logo.png')
				},
				{
					imgSrc:require('../assets/sougou_logo.png')
				}],
				showSearchSelectView:false,
				pushUrlData: [{
                	name: '360搜索',
              	    searchSrc: 'https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q='
          		 }, {
               		 name: '百度搜索',
                     searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
           		 }, {
             	     name: '搜狗搜索',
               		 searchSrc: 'https://www.sogou.com/web?query='
          		  }]
			}
		},
		methods:{
			clickChangSearch:function(){
				this.showSearchSelectView = !this.showSearchSelectView
			},
			clickItemBlock:function(index){
				this.selectNow = index;
				this.showSearchSelectView = false;
				var url = this.pushUrlData[index].searchSrc;
				 //打开对应的搜索界面
				this.$emit('searchUrlStr',url)
			}

		}
	}


</script>

<style type="text/css">
ul{list-style: none;padding: 0;margin: 0}
.main-logo {
    width: 600px;
    height: 140px;
    position: relative;
}

.main-logo img {
    display: block;
    margin: 0 auto;
    user-select: none;
    cursor: pointer;
}

.logoList-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid;
    border-color: #000 transparent transparent transparent;
    right: 100px;
    top: 66px;
    cursor: pointer
}

.logoList {
    position: absolute;
    top: 100%;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    z-index: 999999;
    border: 1px solid #d4d4d4
}

.logoList li {
    width: 100%;
    height: 80px;
    background-color: #FEFEFE; /*少个封号报错*/
    line-height: 80px;
    padding-top: 1px;
}

.logoList li img {
    width: 100%;
    margin-top: 10px;
}

</style>