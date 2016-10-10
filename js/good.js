/*
* @Author: Administrator
* @Date:   2016-10-06 15:54:32
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-10 21:57:55
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
});

/*
	商品数量的加减
 */

$(function(){
	var amount = {
		init: function(){
			this.numReduce = $('.reduce');
			this.numInput = $('.amount input');
			this.numAdd = $('.plus');

			this.amountAdd();
			this.inputChange();
			this.amountReduce();
		},

		//商品数量++
		amountAdd: function(){
			var that = this;
			that.numAdd.click(function(){
				var amount = parseInt( $(this).prev().val() );
				amount++;				
				if(amount > 1){
					that.numReduce .css({
						cursor: 'pointer',
						backgroundColor: '#fff'
					});
				}
				// 把得到的 amount 赋给input框
				$(this).prev().val(amount);
			});
			 
		},
		//实时监听input框值的变化 propertychange
		inputChange: function(){
			var that = this;
			that.numInput.on('input propertychange',function(){
				var amount = parseInt( $(this).val() );
				if(amount < 1){
					amount = 1;
				}else if(amount > 1){
					that.numReduce .css({
						cursor: 'pointer',
						backgroundColor: '#fff'
					});
					
				}
			//判断输入是否含有非数字字符
				var reg = /^\d+$/;
				if(!reg.test(amount)){
					amount = 1;
				}
				$(this).val(amount);
			});
		},
		//商品数量--
		amountReduce: function(){
			var that = this;
			that.numReduce.click(function(){				
				var amount = parseInt( $(this).next().val() );
				amount--;
				if(amount <= 1){
					$(this).css({
						cursor: 'not-allowed',
						backgroundColor: '#ccc'
					});
					amount = 1;
				}
				
				$(this).next().val(amount);
			});
		},
		addCart: function(){
			
		},
	};
	amount.init();
});

