/*
* @Author: Administrator
* @Date:   2016-10-06 15:05:01
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-10 12:11:04
*/


/*
	login-box 界面
 */
$(function(){
	var loginBtn = $('.login-box button');
	var username = $('.username input').val();		
	var password = $('.password input').val();


	loginBtn.click(function(){		
		var username = $('.username input').val();		
		var password = $('.password input').val();
		//读取cookie
		var loginUserinfo = $.cookie('userinfo') || '{}';//得到的是一个json对象字符串
			console.log(loginUserinfo);
		loginUserinfo = JSON.parse( loginUserinfo );//将一个json对象字符串转为json对象
			console.log(loginUserinfo);
		$('.username input').val(loginUserinfo.phoneNumber);
			
		$('.password input').val(loginUserinfo.passWord);

		setTimeout(function(){
			//登录后默认跳转到购物车
			window.location.href = 'cart.html';
		},1000);
		
	});
		
});
