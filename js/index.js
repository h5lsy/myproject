/*
* @Author: Administrator
* @Date:   2016-09-27 20:11:57
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-09 12:02:01
*/

/*
	banner图淡入淡出轮播
 */
$(function(){
	var banner = {
		init: function(){
			//初始化属性
			this.imgs = $('.banner a img');
			this.arrowL = $('.banner').find('.arrow-left');
			this.arrowR = $('.banner').find('.arrow-right');
			this.circles = $('.banner').find('.circles span');
			this.now = 0;
			this.next = 0;
			this.timer = null;

			//函数调用
			this.autoPlay();
			this.arrowShow();
			this.nextClick();
			this.prevClick();
			this.circlesClick();
			
		},
		//自动播放
		autoPlay: function(){
			var that = this;
			this.timer = setInterval(function(){
				that.next++;
				that.next %= that.imgs.length;
				that.switchImg();
			},2000);
		},
		//图片切换
		switchImg: function(){
			var that = this ;
			this.imgs.eq(this.now).stop(true).fadeOut(100);
			this.imgs.eq(this.next).stop(true).fadeIn(100);
			this.now = this.next;

			//小圆圈的下标
				that.circles.eq(that.next)
					.addClass('active')
					.siblings().removeClass('active');
		},
		//鼠标放入，arrow显示
		arrowShow: function(){
			var that = this;
			$('.banner').hover(function(){
				that.arrowL.show();
				that.arrowR.show();
				clearInterval(that.timer);
			},function(){
				that.arrowL.hide();
				that.arrowR.hide();
				that.autoPlay();
			});
		},
		//点击arrowR 下一张
		nextClick: function(){
			var that = this;
			this.arrowR.click(function(){
				that.next++;
				that.next %= that.imgs.length;
				that.switchImg();
			});
		},
		//点击arrowL 前一张
		prevClick: function(){
			var that = this;
			this.arrowL.click(function(){
				that.next--;
				//console.log(that.next)
				if(that.next <= -1){
					that.next = 3;
				}
				that.switchImg();
			});
		},
		//点击小圆圈切换图片
		circlesClick: function(){
			var that = this ;
			this.circles.click(function(){
				that.next = $(this).index();
				that.switchImg();
			});
		},
	};
	banner.init();
});


/*
	service 鼠标移入颜色变换
 */
$(function(){
	
	$('.service a').hover(function(){
		$(this).find('span').css({
			color: '#e10482'
		});
		$(this).find('p').css({
			color: '#e10482'
		});
		
	},function(){
		$(this).find('span').css({
			
			color: '#404040'
		});
		$(this).find('p').css({
			color: '#404040'
		});
	});
});


/*
	show鼠标移入图片，图片出现向上移动的效果
 */
$(function(){
	$('.show img').hover(function(){
		$(this).stop(true).animate({
			marginTop: 2
		});
	},function(){
		$(this).stop(true).animate({
			marginTop: 16
		});
	});
});


/*
 	hot-collection鼠标滑过图片，图片向上运动
 */
$(function(){
	$('.hot-list-left').hover(function(){
		$(this).stop(true).animate({
			top: -10
		});
	},function(){
		$(this).stop(true).animate({
			top: 0
		});
	});
	$('.hot-list img').hover(function(){
		$(this).stop(true).animate({
			marginTop: -10
		});
	},function(){
		$(this).stop(true).animate({
			marginTop: 0
		});
	});
});
/*
	hot brand 鼠标滑过，图片透明度改变
 */
$(function(){
	$('.hot-brand-list img.opacity').hover(function(){
		$(this).css({
			opacity: 0.8
		});
	},function(){
		$(this).css({
			opacity: 1
		});
	});
});


/*
	global-sale-left 鼠标滑过 图片变大
 */
$(function(){
	$('.global-show-img').hover(function(){
		$(this).find('.global-show-first').stop(true).animate({
			width: 444,
			height: 286,
			marginTop: -13,
			marginLeft: -13

		},200)
	},function(){
		$(this).find('.global-show-first').stop(true).animate({
			width: 418,
			height: 260,
			marginTop: 0,
			marginLeft: 0
		},200)
	});
});


/*
	global-sale-right 鼠标滑过 出现border 图片上出现文字
		selection-img 鼠标滑过 出现阴影
 */
$(function(){
	$('.hot-brand-item').hover(function(){
		$(this).css({
			border: '1px solid #ccc'
		});
		$(this).find('p').show();
	},function(){
		$(this).css({
			border: 0
		});
		$(this).find('p').hide();
	});
	$('.selection-img').hover(function(){
		$(this).css({
			'box-shadow': '0 0 10px #ccc'
		});
	},function(){
		$(this).css({
			'box-shadow': '0 0 0 #fff'
		});
	});
});
