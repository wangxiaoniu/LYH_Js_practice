/*距离页面左上角位置

window.onload=function(){
	var box = document.getElementById('box');
	alert(getRect(box).top);
	alert(getRect(box).right);
	alert(getRect(box).bottom);
	alert(getRect(box).left);
	
}
function getRect(element){
	var rect=element.getBoundingClientRect();
	var top=document.documentElement.clientTop;
	var left=document.documentElement.clientLeft;
	return{
		top:rect.top-top,bottom:rect.bottom-top,
		left:rect.left-left,right:rect.right-left
	};
}
-------------
动态加载js
-------------
var flag = true;						//如果flag为真，那么就加载JS脚本


//执行顺序理解的问题
if (flag) {
	loadScript('test.js');
}

function loadScript(url) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
}

---------------
动态加载css--link
---------------
var flag=true;
if(flag){
	loadStyle('layout.css');
}
function loadStyle(url){
	var link=document.createElement('link');
	link.rel='stylesheet';
	link.type='text/css';
	link.href=url;
	document.getElementsByTagName('head')[0].appendChild(link);
}

--------------------
动态加载css style
--------------------
var flag=true;
if(flag){
	var style=document.createElement('style');
	style.type="text/css";
	document.getElementsByTagName('head')[0].appendChild(style);
	insertRule(document.styleSheets[0],'#box','width:200px;height:200px;background:lightgreen',0);
}
function insertRule(sheet,selectorText,cssText,position){
	//如果是非IE
	if(sheet.insertRule){
		sheet.insertRule(selectorText+'{'+cssText+'}',position);
	}
	//如果是IE
	else if(sheet.addRule){
		sheet.addRule(selectorText,cssText,position);
	}
}

-------------------------------
动态加载javascript script
-------------------------------

*/

var flag=true;
if(flag){
	var script=document.createElement('script');
	script.type='text/javascript';
	script.text="alert('sdc')"
	document.getElementsByTagName('head')[0].appendChild(script);

}