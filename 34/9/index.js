
window.onload=function(){
	//$().removeRule(0);
	//个人中心
	$().getClass('member').hover(
		function(){
			
			$(this).css('background','url(images/arrow2.png) no-repeat right center');
			$().getClass('member_ul').show();
		},
		function(){
			$().getClass('member_ul').hide();
			$(this).css('background','url(images/arrow.png) no-repeat right center');
			
		}
	);

	//登录框
	var login=$().getId('login');
	var screen=$().getId('screen');
    login.center(352,250).resize(function(){
		if(screen.css('display') == 'block'){
            screen.lock();
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
        login.center(352,250);
		login.css('display','block');
		screen.lock();
	});
	$().getId('login').drag();
	/*var oDiv=document.getElementById('login');*/
	//拖拽流程：
	//1先点下去
	//2在点下的物体被选中，进行move移动
	//3抬起鼠标，停止移动
	//点击某个物体，用oDiv即可，move和up是全局区域，也就是整个文档通用，应该用

};
