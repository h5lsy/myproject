/*
* @Author: Administrator
* @Date:   2016-10-06 15:09:36
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-06 15:11:20
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
	$('.common').hover(function(){
		$(this).find('.my-collect-box').show().stop(true).animate({
			right: 35,
			opacity: 1,

		});

	},function(){
		$(this).find('.my-collect-box').stop(true).animate({
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