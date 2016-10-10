/*
* @Author: Administrator
* @Date:   2016-10-04 16:47:25
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-10 11:24:03
*/


/*
	signup-box和next表单验证
 */
$(function(){
	var signup = {
		init: function(){
			this.signupItem = $('.signup-box-item') ;
			this.signupInput = $('.signup-box-item input');
			this.nextBtn = $('.signup-box a');
			this.signupBox = $('.signup-box');
			this.freeSignup = $('.free-signup');
			this.phoneNumInput = $('.phone-number input');
			this.nickNameInput = $('.nick-name input');
			this.importPassword = $('.import-password input');
			this.checkPassword = $('.check-password input');
			this.regBtn = $('.next button');
			this.regInput = $('.next p input');
			this.container = $('.container');
			this.boxSpan = $('.box span');
			this.boxBtn = $('.box button');
			this.i = 0;
			this.j = 0;

			this.borderColorChange();
			this.randomFourCode();
			// this.usableBtn();
			this.nextShow();
			this.formInput();
			// this.regClick();
			
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
			var that = this;			
			var str = $('.phone-number input').val();			
			var reg = /^1\d{10}$/;
			if(str == ""){
				$('.phone-number strong').show();
			}else{				
				if(!reg.test(str)){
					$('.phone-number strong').show().html('手机格式有误，请重新输入!!!');
				}else{
					$('.phone-number strong').hide();
					$('.phone-number').css({
						border: '1px solid #999',
						height: 46
					});
					that.i++;
					console.log(that.i)
				}
			};								
		},

		//判断验证码是否输入正确
		verificationCode: function(){
			var btn = $('.verification-code b');
			var that = this;
			var str2 = $('.verification-code input').val(); 

			if(str2 == ""){
				$('.verification-code strong').show();
			}else{
				if(btn.html() == str2){

					$('.verification-code strong').hide();
					$('.verification-code').css({
						border: '1px solid #999',
						height: 46
					});
					that.i++;
					console.log(that.i)
				}else{
					$('.verification-code strong').show().html('验证码输入错误，请重新输入!!!');
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
			var that = this;
			var str1 = $('.message input').val();
			var reg1 = /^\d{6}$/;
			if(str1 == ""){
				$('.message strong').show();
			}else{
				if(!reg1.test(str1)){
					$('.message strong').show().html('验证码错误，请重新输入!!!');
				}else{
					$('.message strong').hide();
					$('.message').css({
						border: '1px solid #999',
						height: 46
					});
					that.i++;
					console.log(that.i)
				} 
			};
			that.usableBtn();
		},

		//判断是否完成以上三步，完成以后，按钮变的可用
		usableBtn: function(){
			var that = this;			
			if(that.i >= 3){				
				this.nextBtn.css({
					cursor: 'pointer',
					backgroundColor: '#e10074'
				});
			};
			// that.nextShow();
		},

		//点击next按钮 next表单出现，原表单隐藏
		nextShow: function(){
			var that = this;
			this.nextBtn.click(function(){
				that.signupBox.css({
					display: 'none',
				});
				that.freeSignup.find('.next').show();
			});
		},

		//next表单 input的获焦与失焦
		formInput: function(){
			var that = this;

			//nickNameInput 获取焦点与失去焦点
			that.nickNameInput.focus(function(){
				$(this).parent().css({
					border: '2px solid #999',
					height: 44
				});
				$(this).prev().css({
					height: 44,
					lineHeight: '44px'
				});
			});
			that.nickNameInput.blur(function(){
				$(this).parent().css({
					border: '2px solid #e10047',
					height: 44
				});

			//验证昵称
				if($(this).val() == ''){
					$(this).next().show();
				}else{
					$(this).next().hide();
					$(this).parent().css({
						border: '1px solid #999',
						height: 46
					});
					$(this).prev().css({
						height: 46,
						lineHeight: '46px'
					});
					that.j++;
					console.log(that.j)
				} 
			});


			//importPassword 获取焦点与失去焦点
			that.importPassword.focus(function(){
				$(this).parent().parent().css({
					border: '2px solid #999',
					height: 91
				});
				$(this).parent().next().children().first().css({
					height: 44,
					lineHeight: '44px'
				});
			});
			that.importPassword.blur(function(){
				$(this).parent().parent().css({
					border: '2px solid #e10047',
					height: 91
				});

			//验证密码
				var str = that.importPassword.val();
				var reg = /^\w{6,20}$/;
				if(str == ''){
					$(this).parent().parent().find('strong').show();
				}else{
					if(!reg.test(str)){
						$(this).parent().parent().find('strong').show().html('请输入6-20位字母、数字或字符');
					}else{
						$(this).parent().parent().find('strong').hide();
						$(this).parent().parent().css({
							border: '1px solid #999',
							height: 93
						});
						$(this).parent().next().children().first().css({
							height: 46,
							lineHeight: '46px'
						});
						that.j++;
						console.log(that.j)
					}
				} 
			});

			//checkPassword 获取焦点与失去焦点
			that.checkPassword.focus(function(){
				$(this).parent().parent().css({
					border: '2px solid #999',
					height: 91
				});
				$(this).prev().css({
					height: 44,
					lineHeight: '44px'
				});
			});
			that.checkPassword.blur(function(){
				$(this).parent().parent().css({
					border: '2px solid #e10074',
					height: 91
				});

			//再次确认密码
				var str = $(this).val();
				if(str == ''){
					$(this).parent().parent().find('strong').show().html('确认密码不能为空');
				}else{
					if( that.importPassword.val() == str ){
						$(this).parent().parent().find('strong').hide();
						$(this).parent().parent().css({
							border: '1px solid #999',
							height: 93
						});
						$(this).prev().css({
							height: 46,
							lineHeight: '46px'
						});
						that.j++;
						console.log(that.j)

					}else{
						$(this).parent().next().show().html('密码输入不一致');
					}
				}
			});
			that.regClick();
		},

		//点击注册按钮，跳转到登录界面login.html
		regClick: function(){
			var that = this;
			that.regBtn.click(function(){
				if(that.regInput.prop('checked')){
					console.log('我被选中了');
					that.j++;
					console.log(that.j)
					if(that.j >= 4){
						window.location.href = 'login.html';
					}
				}else{
					that.container.show();
				}

				//设置cookie
				var userinfo = {
					phoneNumber: $('.phone-number input').val(),
					passWord: $('.import-password input').val()
				}; 
				console.log(userinfo);
				$.cookie('userinfo',JSON.stringify( userinfo ),{expires: 365,path: '/'});
				
			});
			$('.box span,.box button').on('click',function(){
				that.container.hide();
				//console.log(666)
			});
			// that.boxSpan.click(function(){
			// 	that.container.hide();
			// });
			// that.boxButton.click(function(){
			// 	that.container.hide();
			// });
			
			

		},
	};
	signup.init();
});


/*
	next的 表单验证
 */
// $(function(){
// 	var next = {
// 		init: function(){
// 			this.nextBtn = $('.signup-box a');
// 			this.signupBox = $('.signup-box');
// 			this.freeSignup = $('.free-signup');

// 			//方法调用
// 			this.nextShow();
// 		},
// 		nextShow: function(){
// 			var that = this;
// 			this.nextBtn.click(function(){
// 				that.signupBox.css({
// 					display: 'none',
// 				});
// 				that.freeSignup.find('.next').show();
// 			});
// 		},
// 	};
// 	next.init();
// });
