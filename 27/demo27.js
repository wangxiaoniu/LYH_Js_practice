
addEvent(window,'load',function(){
	//var fm=document.getElementById('myform');
	//var fm=document.getElementsByTagName('form')[0];
	//var fm=document.forms[0];HTML DOM 通过下标获取
	var fm=document.getElementById('myform');
	//阻止提交
	addEvent(fm,'submit',function(evt){
		preDef(evt);
	});

	//ps事件，用传统方式：fm.onsubmit=function(){}
	//submit事件，为什么要用form对象来触发呢？为什么不能是input中的submit提交按钮触发呢？
	//把submit事件注册到input中的submit按钮，是无法触发submit事件的
	//必须把submit事件绑定到form对象上 ，才可以触发submit事件，
	//只不过触发submit事件的流程是点击input中的submit按钮而已。

	//	实现ctrl+enter实现提交
	addEvent(document,'keydown',function(evt){
		var e=evt||window.event;
		if(e.keyCode ==13){
			fm.submit();
		}
	});

});