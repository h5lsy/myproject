/*
* @Author: Administrator
* @Date:   2016-10-06 15:09:36
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-08 17:33:20
*/

/*
	右边界面
 */
//在线客服
$(function(){
	$('.first-item').hover(function(){
		$('.contact').show().stop(true).animate({
			right: 35,
			opacity: 1
		});

	},function(){
		$('.contact').stop(true).animate({
			right: 60,
			opacity: 0
		});
		

	});
});

//我的收藏夹
$(function(){
	$('.my-collect').hover(function(){
		$('.my-collect-box').show().stop(true).animate({
			right: 35,
			opacity: 1,

		});

	},function(){
		$('.my-collect-box').stop(true).animate({
			right: 60,
			opacity: 0
		});
		

	});
});

//我的购物券
$(function(){
	$('.my-coupon').hover(function(){
		$('.my-coupon-box').show().stop(true).animate({
			right: 35,
			opacity: 1,

		});

	},function(){
		$('.my-coupon-box').stop(true).animate({
			right: 60,
			opacity: 0
		});
		

	});
});

//手机注册有礼
$(function(){
	$('.QR-code').hover(function(){
		$('.wenxin').show().stop(true).animate({
			right: 35,
			opacity: 1,

		});

	},function(){
		$('.wenxin').stop(true).animate({
			right: 60,
			opacity: 0
		});
		

	});
});


/*
	搜索框ajax效果
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
					cb: 'hhl'//回调函数放到最外面，
							 //应该是百度接口专门有一个回调函数来接受数据
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
	nav导航的二级菜单
 */
$(function(){
	var secondaryMenu = {
		init: function(){
			this.ul = $('.classify-list ul');
			this.lis = $('.classify-list ul li');
			this.navClassify = $('.nav-classify');

			this.menuShow();
			this.listShow();
		},
		//点击nav-classify，显示与隐藏
		menuShow: function(){
			var that = this;
			this.navClassify.click(function(){
				if($(this).find('span').html() == '查看分类'){
					$(this).find('span').html('收起分类');
					$(this).find('.classify-list').show();
					that.lis.find('.face-care').show();
					that.lis.first().css({
						backgroundColor: '#000',
						color: '#fff'
					});
					that.lis.first().find('.arrow').show();
					$(this).find('img').attr({
						src: 'images/nav-2.gif'
					});
				}
				// $(this).find('span').html('收起分类');
				// $(this).find('.classify-list').show();
				else if($(this).find('span').html() == '收起分类'){
					$(this).find('span').html('查看分类');
					$(this).find('.classify-list').hide();
					$(this).find('img').attr({
						src: 'images/nav-1.png'
					});
				}


				 //console.log($(this).find('span').html())
				// $(this).find('.classify-list').hide();
				
			});
		},
		//滑过li显示下级菜单
		listShow: function(){
			var that = this;
			that.lis.hover(function(){
				$(this).css({
					backgroundColor: '#000',
					color: '#fff'
				});
				$(this).find('.arrow').show();
				$(this).find('.common').show();
				// $(this).chlidren().show();
				
			},function(){
				$(this).css({
					backgroundColor: '#f0f0f0',
					color: '#000'
				});
				$(this).find('.arrow').hide();
				$(this).find('.common').hide();
				
			});
			that.ul.mouseenter
		},
	};
	secondaryMenu.init();
});