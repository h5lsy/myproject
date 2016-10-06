/*
* @Author: Administrator
* @Date:   2016-10-04 16:47:25
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-06 15:13:08
*/

$(function(){
	// var signupItem = $('.signup-box-item') ;
	// var signupInput = $('.signup-box-item input');
	// var signupStrong = $('.signup-box-item strong') ;
	// signupInput.focus(function(){
	// 	$(this).parent().css({
	// 		border: '2px solid #999',
	// 		height: 44
	// 	});
	// });
	// signupInput.blur(function(){
	// 	$(this).parent().css({
	// 		border: '2px solid #e10074',
	// 		height: 44
	// 	});
	// 	$(this).next().show();
	// });

	var signup = {
		init: function(){
			this.signupItem = $('.signup-box-item') ;
			this.signupInput = $('.signup-box-item input');

			this.borderColorChange();
			this.randomFourCode();
			
		},
		//input获焦/失焦 盒子边框变色，
		borderColorChange : function(){
			var that = this;
			that.signupInput.focus(function(){
				$(this).parent().css({
					border: '2px solid #999',
					height: 44
				});
			});
			$('.phone-number input').blur(function(){
				$(this).parent().css({
					border: '2px solid #e10074',
					height: 44
				});
				that.phoneNumber();
			});
			$('.verification-code input').blur(function(){
				$(this).parent().css({
					border: '2px solid #e10074',
					height: 44
				});
				that.verificationCode();
			});
			$('.message input').blur(function(){
				$(this).parent().css({
					border: '2px solid #e10074',
					height: 44
				});
				that.messageCode();
			});
		},
		//判断手机号是否输入正确，
		phoneNumber: function(){
			// var that = this;
			var str = $('.phone-number input').val();
			console.log(str)
			var reg = /^\d{11}$/;
			if(str == ""){
				$('.phone-number strong').show();
			}else{
				
				if(!reg.test(str)){
					$('.phone-number strong').show().html('!手机格式有误，请重新输入');
				}else{
					$('.phone-number strong').hide();
					$('.phone-number').css({
						border: '1px solid #999',
						height: 46
					});
				}
			};
			
			
			
		},
		//判断验证码是否输入正确
		verificationCode: function(){
			var btn = $('.verification-code b');
			var that = this;
			var str = $('.verification-code input').val(); 
			if(str == ""){
				$('.verification-code strong').show();
			}else{
				if(str == btn.html()){
					$('.verification-code strong').hide();
					$('.verification-code').css({
						border: '1px solid #999',
						height: 46
					});
				}else{
					$('.verification-code strong').show().html('验证码输入错误，请重新输入');
				}
			};
			
			
		},
		//随机产生四位验证码
		randomFourCode: function(){
			var btn = $('.verification-code b');
			//console.log(btn.html())
			btn.click(function(){
				btn.html(randomCode()); 
				
				function randomCode(){
						var sum = 0;//用来计需要得到ascll码的次数
						var str = "";//设置空字符串用来存放验证码
					
						while(1){
							var num = Math.round(Math.random()*122);//随机得到的数
							if(num >=48 && num <= 57 || num >=65 && num <= 90 || num >=97 && num <= 122){
								//是"0"到"9"的字符 		是"A"到"Z"的字符			是"a"的"z"字符
								sum++;
								str = str + String.fromCharCode(num);								
							} 
							if(sum == 4){
								break;
							}												
						}
						return str;		
					};	
			});
		},
		//判断短信验证码是否输入
		messageCode: function(){
			var str = $('.message input').val();
			var reg = /^\d{6}$/;
			if(str == ""){
				$('.message strong').show();
			}else{
				if(!reg.test(str)){
					$('.message strong').show().html('验证码错误，请重新输入');
				}else{
					$('.message strong').hide();
					$('.message').css({
						border: '1px solid #999',
						height: 46
					});
				} 
			};
			
		},
	};
	signup.init();
});

