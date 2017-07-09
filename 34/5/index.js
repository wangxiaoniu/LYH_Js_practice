
window.onload=function(){
	//$().removeRule(0);
	//个人中心
	$().getClass('member').hover(
		function(){
			
			$(this).css('background','url(images/arrow2.png) no-repeat right center');
			$().getClass('member_ul').show();
		},function(){
			$().getClass('member_ul').hide();
			$(this).css('background','url(images/arrow.png) no-repeat right center');
			
		}
	);

	//登录框
	var login=$().getId('login');
	var screen=$().getId('screen');
	$().getId('login').center(352,250);
	$().resize(function(){
		if(screen.css('display') == 'block'){
			login.center(352,250);
			$().getId('screen').lock();

		}
	});
	$().getClass('close').click(
		function(){
			login.css('display','none');
			screen.unlock();
		}
	);
	$().getClass('login').click(function(){
		//锁屏功能
		
		login.css('display','block');
		screen.lock();
	});


}
