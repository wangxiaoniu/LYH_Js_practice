/*
过滤输入模式，纯数字
1.紧致或拼比非数字键的输入，阻止非数字键的默认行为
2.验证后取消，你可以先输入非法字符，然后判断，取消你刚输入的文本


addEvent(window,'load',function(){
	var fm=document.getElementById('myform');
	var user=fm.elements['user'];
	var content=fm.elements['content'];
	//屏蔽非数字键的输入
	addEvent(content,'keypress',function(evt){
		var e=evt||window.event;
		var charCode=getCharCode(evt);
		//alert(charCode);
		//把编码转换成实际的按键
		//alert(String.fromCharCode(charCode));
		//正则表达式判断文本是否为数字
		if(!/\d/.test(String.fromCharCode(charCode)) && charCode >8){
			preDef(evt);
		}
	});
	//禁止默认的复制剪切粘贴事件
	addEvent(content,'copy',function(evt){
		preDef(evt);
	});
	addEvent(content,'cut',function(evt){
		preDef(evt);
	});
	addEvent(content,'paste',function(evt){
		preDef(evt);
	});//用户体验不好
	//屏蔽输入法,但chrome无效
	//content.style.imeMode="disabled"

	//2.验证后取消，你可以先输入非法字符，然后判断，取消你刚输入的文本
	addEvent(content,'keyup',function(evt){
		this.value=this.value.replace(/[^\d]/g,"");//将非数字键转换为空
	});

});
==============
*/
addEvent(window,'load',function(){
	var fm=document.getElementById('myform');
	addEvent(fm.elements["a1"],'keyup',tabForWard);
	addEvent(fm.elements["a2"],'keyup',tabForWard);
	addEvent(fm.elements["a3"],'keyup',tabForWard);
	function tabForWard(evt){
		var e=evt||window.event;
		//判断当前的长度是否和我们输入的长度一致
		if(this.value.length == this.maxLength){
			//遍历所有控件
			for(var i=0;i<fm.elements.length;i++){
				if(fm.elements[i] == this){
					fm.elements[i+1].focus();
					return;
				}
			}
		}
	}
});