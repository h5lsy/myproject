/*
* @Author: Administrator
* @Date:   2016-10-07 17:46:47
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-11 18:00:01
*/

$(function(){
	var cart = {
		init: function(){
			this.selectAllBtn = $('input[name="selectbtn"],input[name="checkbox"]');
			this.cart = null;//先定义购物车为空

			this.initGoods();

			this.amountAdd();
			this.inputChange();
			this.amountReduce();
			this.deleteGoods();
			this.checkboxChange();
			this.selectAll();
		},

		//初始化购物车
		initGoods: function(){

			(function(){
				//生成一条数据
						var goods = $('<div class="box"></div>');
						//console.log(goods[key]);
						goods.load('goodsInfo.html',function(){
							// console.log(key);
							// goods.find('.cart-goods-item').attr('data-id',result[key]['goods-id']);
							// goods.find('.goods-name a').html(result[key]['goods-name']);
							// goods.find('.goods-price').html(result[key]['goods-price']);
							// goods.find('.goods-style').html(result[key]['goods-style']);
							// goods.find('.goods-size').html(result[key]['goods-size']);
							// goods.find('.goods-img img').attr('src',result[key]['goods-img']);
							// goods.find('.td-amount-wrapper .amount-input')
							// 	.attr('data-stock',result[key]['goods-stock'])
							// 	.val(that.cart[key].goodsAmount);

							// var money = that.cart[key].goodsAmount * result[key]['goods-price'];
							// goods.find('.goods-money').html( money.toFixed(2) );

							$('.container').append(goods);

						});
			})();
						
		},

		//商品数量++
		amountAdd: function(){
			var that = this;
			//之所以使用on方法，是因为它可以绑定未来元素
			$('.container').on('click','.plus',function(){
				var amount = parseInt( $(this).prev().val() );
				amount++;				
				if(amount > 1){
					$('.reduce') .css({
						cursor: 'pointer',
						backgroundColor: '#fff'
					});
				}
				// 把得到的 amount 赋给input框
				$(this).prev().val(amount);

				//调用小计处理方法
				that.moneyHandle($(this),amount);
			});
			
			 
		},

		//实时监听input框值的变化 propertychange
		inputChange: function(){
			var that = this;
			$('.container').on('input propertychange','.amount input',function(){
				var amount = parseInt( $(this).val() );
				if(amount < 1){
					amount = 1;
				}else if(amount > 1){
					$('.reduce') .css({
						cursor: 'pointer',
						backgroundColor: '#fff'
					});
					
				}else{
					$('.reduce') .css({
						cursor: 'not-allowed',
						backgroundColor: '#ccc'
					});
				}
			//判断输入是否含有非数字字符
				var reg = /^\d+$/;
				if(!reg.test(amount)){
					amount = 1;
				}
				$(this).val(amount);

				//调用小计处理方法
				that.moneyHandle($(this),amount);
			});
		},

		//商品数量--
		amountReduce: function(){
			var that = this;
			$('.container').on('click','.reduce',function(){				
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

				//调用小计处理方法
				that.moneyHandle($(this),amount);
			});
		},

		//小计处理
		moneyHandle: function(obj,amount){

			

		//计算money
		var price =  obj.parent().parent().prev().find('.goods-price').html();
		var money = amount * price;
		obj.parent().parent().next().find('.goods-money').html(money.toFixed(2));
		},

		//删除商品
		deleteGoods: function(){
			var that = this;
			$('.container').on('click','.delete',function(){
				// console.log(123)
				$('.mengceng').show();
			});
			$('.ask-box span,.cancel').on('click',function(){
				$('.mengceng').hide();
			});
			$('.confirm').click(function(){
				$(this).parent().parent().hide().prev().remove();
			});
		},

		//复选框按钮
		checkboxChange: function(){
			var that = this;
			$('.container').on('change','input[name="checkbox"]',function(){
				if($('input[name="checkbox"]').prop('checked')){
					
					var count =  1;
					var price = $('.goods-money').html();
					$('.cart-option span.num').html(count);
					$('.cart-option p i').html(price);
					$('.cart-option button').addClass('active');

				}else{
					$('.cart-option span.num').html('0');
					$('.cart-option p i').html('0.00');
					$('.cart-option button').removeClass('active');
				}
			});
		},

		//全选按钮
		selectAll: function(){
			var that = this;
			this.selectAllBtn.click(function(){
				if( $(this).prop('checked') ){
					$('.w-cart-con input[type="checkbox"]').prop('checked',true);
				}else{
					$('.w-cart-con input[type="checkbox"]').prop('checked',false);
				}
				$('.w-cart-con input[type="checkbox"]').change();
			});
			
			
			// this.selectAllBtn.on('change',function(){
			// 	if( $(this).prop('checked') ){
			// 		$('.w-cart-con input[type="checkbox"]').prop('checked',true);
			// 	}else{
			// 		$('.w-cart-con input[type="checkbox"]').prop('checked',false);
			// 	}

			// });
			
		},
	};
	cart.init();
});


			 	
		