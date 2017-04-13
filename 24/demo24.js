
/*
window.onload=function(){
	document.onclick=function(evt){
		alert(evt);
	}
}

------
以上跨浏览器兼容ie
--------------
window.onload=function(){
	document.onclick=function(evt){
		var e=evt||window.event;
		alert(e);
	}
}

----------------
鼠标按左右中键判断，跨浏览器
----------
window.onload=function(){
	document.onmouseup=function(evt){
		if(getButtion(evt) == "0")
		alert("左键");
		else if(getButtion(evt) == "1")
			alert('中键')
		else if(getButtion(evt)=="2"){
			alert('右键');
		}
	}
}
//ps:window.event这个属性IE和谷歌是支持的
//ps:谷歌也支持w3c;如果说W3c和ＩＥ都支持就与W3C为准

//跨浏览器鼠标按钮
function getButtion(evt){
	var e=evt||window.event;
	if(evt){
		return e.button;
	}else if(window.event){
		switch(e.button){
			case 1:
			return 0;
			case 4:
			return 1;
			case 2:
			return 2;
			case 0://360兼容
			return 2;
		}
	}
}
------------------------
-------鼠标点击事件，点击弹出所在位置
------------------------
window.onload=function(){
	document.onclick=function(evt){
		var e=evt||window.event;
		alert(e.clientX+document.documentElement.scrollTop+','+e.clientY);
	}
}

------------------------
修改键属性
shiftKey判断是否按下了shift键
ctrlKey判断是否按下了ctrl键
altkey判断是否按下了alt键
------------------------
window.onload=function(){
	document.onclick=function(evt){
		alert(getKey(evt));
	}
}
function getKey(evt){
	var e=evt||window.event;
	var keys=[];

	if(e.shiftKey)keys.push('shift');
	if(e.ctrlKey)keys.push('ctrl');
	if(e.altKey)keys.push('alt');

	return keys;

}
*/

window.onload=function(){
	document.onclick=function(evt){
		alert(getKey(evt));
	}
}
function getKey(evt){
	var e=evt||window.event;
	var keys=[];

	if(e.shiftKey)keys.push('shift');
	if(e.ctrlKey)keys.push('ctrl');
	if(e.altKey)keys.push('alt');

	return keys;

}








