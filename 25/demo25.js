





window.onload=function(){
	document.onclick=function(){
		alert('document');
	}
	document.documentElement.onclick=function(){
		alert('html');
	}
	document.body.onclick=function(){
		alert('body');
	}
	document.getElementById('box').onclick=function(){
		alert('div');
	}
	document.getElementsByTagName('input')[0].onclick=function(evt){
		
		alert('input');
		//e.stopPropagation();//W3C取消冒泡 ie9+支持
		//e.cancelBubble=true;//ie取消冒泡
		setStop(evt);
	}
}

function setStop(evt){
	var e=evt||window.event;
	typeof e.stopPropagation=='function'?e.stopPropagation():e.cancelBubble=true;
}








