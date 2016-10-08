/*
* @Author: Administrator
* @Date:   2016-10-07 17:46:47
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-07 22:11:36
*/

/*
	搜索框Ajax效果
 */
$(function(){
	var search = {
		init: function(){
			this.searchInput = $('.logo-search-box input');
			this.searchContent = $('.logo-search-box ul');

			this.valueChange();
			this.getSearchBox();
		},
		//监控input框的内容,即时搜索
		valueChange: function(){
			var that = this;
			this.searchInput.on('input propertychange',function(){
				//console.log( that.searchInput.val() );
				 that.getData( that.searchInput.val() );
			});
		},
		//通过ajax获取后台数据
		getData: function(data){
			var that = this;
			$.ajax({
				type:'get',
				url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
				data: {
					wd: data,
					cb: 'hhl'
				},
				//跨域
				dataType: 'jsonp',
				success: function(){},
				//result 服务器返回的数据
				// success: function (data){
				// 	var content = '';
				// 	for(var key in data.result){
				// 		content += '<li>'+data.result[key][0]+'</li>'
				// 	}
				// 	that.searchContent.html(content);
				// }


			});

			//回调
			// function hhl(data){
			// 	// var content = '';
			// 	// 	for(var key in data){
			// 	// 		content += '<li>'+data[key][0]+'</li>'
			// 	// 	}
			// 	// 	that.searchContent.html(content);
			// 	console.log(data)
			// }
		},
		//点击搜索框出现下拉列表
		getSearchBox: function(){
			var that = this;
			this.searchInput.focus(function(){
				that.searchContent.show();
			});
			this.searchInput.blur(function(){
				that.searchContent.hide();
			});
		}
		
	};
	search.init();
});

function hhl(data){
	var searchContent = $('.logo-search-box ul');
	var content = '';
	for(var key in data.s){
			content += '<li>'+data.s[key]+'</li>'
	}
	searchContent.html(content);
	console.log(data);
}

/*
	点击搜索框出现下拉列表
 */
$(function(){
	$('')
});

			 	
		