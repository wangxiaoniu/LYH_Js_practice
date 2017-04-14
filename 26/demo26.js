




/*
传统绑定
window.onload=function(){
	var box=document.getElementById('box');
	box.onclick=function(){
		alert('lll');
	}
}


------------
window.onload=function(){
	alert('lll');
}
if(typeof window.onload =="function"){
	var saved=window.onload;
	
}
window.onload=function(){
		if(saved)saved();
		alert('kkk');
}
//事件切换器
window.onload=function(){
	var box=document.getElementById('box');
	box.onclick=function(){
		alert('点击变色');
		toBlue.call(this);
	}
}
function toRed(){
	this.className='red';
	box.onclick=toBlue;
}
function toBlue(){
	this.className='blue';
	box.onclick=toRed;
}
*/

//事件切换器
window.onload=function(){
	var box=document.getElementById('box');
	box.onclick=function(){
		alert('点击变色');
		toBlue.call(this);
	}
}
function toRed(){
	this.className='red';
	box.onclick=toBlue;
}
function toBlue(){
	this.className='blue';
	box.onclick=toRed;
}
