
addEvent(window,'load',function(){
	var fm=document.getElementById('myform');
	var flag=false;
	//阻止提交
	addEvent(fm,'submit',function(evt){
		preDef(evt);

		if(flag==true) return;
		flag=true;
		alert('提交');
		//模拟延迟
		setTimeout(function(){
			fm.submit();
		},5000);
	});

	

});