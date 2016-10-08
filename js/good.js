/*
* @Author: Administrator
* @Date:   2016-10-06 15:54:32
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-08 21:20:42
*/





/*
	税费说明  展开与隐藏
 */
$(function(){
	$('.price strong').hover(function(){
		$(this).find('.taxes').slideDown(500);
	},function(){
		$(this).find('.taxes').slideUp(500);
	});
});

/*
	商品介绍 颜色变化
 */
$(function(){
	$('.product-right p a').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active')
	})
})