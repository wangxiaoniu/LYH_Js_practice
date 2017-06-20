

/*
addEvent(window,'load',function(){
	var fm=document.getElementById('myform');
	var city=fm.elements["city"];
	//HTML DOM获取
	//alert(city.options[0].value+"---"+city.options[0].text);
	//标准DOM方法也可以获取，不建议表单中使用标准DOM
	//因为HTML DOM的兼容性已经非常好了，简单容易好理解
	//alert(city.options[0].firstChild.nodeValue+'---'+city.options[0].getAttribute('value'))
	addEvent(city,'change',function(){
		//alert(this.selectedIndex);
		alert(this.options[this.selectedIndex].text);
	});
});
//标准的DOM方法添加option
	var option=document.createElement('option');
	var text=document.createTextNode('北京t');
	option.appendChild(text);
	option.setAttribute('value','北京V');
	city.appendChild(option);
   
   //使用option构造函数添加
   var option=new Option('北京t','北京v');
   //city.appendChild(option); IE不兼容
   city.add(option,undefined);//0非IE不兼容


   //删除option
	//city.remove(0);
	city.options[0]=null;

	addEvent(city,'click',function(){
		info.appendChild(this.options[city.selectedIndex]);
	});
*/
addEvent(window,'load',function(){
	var fm=document.getElementById('myform');
	var city=fm.elements["city"];
	var option1=city.options[2];
	city.insertBefore(option1,city.options[option1.index-1]);


});